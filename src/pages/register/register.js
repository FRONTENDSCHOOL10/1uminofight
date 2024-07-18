import '/src/components/Header.js';
import '/src/components/footer/footer.js';
import { getNode } from 'kind-tiger';
import '/src/components/input-text.js';
import pb from '/src/api/pocketbase';

let IdDuplicate = true;
const idField = getNode('#idField');
const idError = getNode('.id-error-message');
const pwField = getNode('#pwField');
const pwError = getNode('.pwd-error-message');
const pwConfirmField = getNode('#pwConfirmField');
const pwConfirmError = getNode('.pwd-confirm-error-message');
const idValidationButton = getNode('.id-validation');
const registerButton = getNode('.register-button');
const nameField = getNode('#userName');
const completeAgreement = getNode('#completeAgreement');
const checkboxes = document.querySelectorAll('.agreement-list input[type="checkbox"]:not(#completeAgreement)');
const requiredCheckboxes = document.querySelectorAll(
  '.agreement-list input[type="checkbox"].required-1, .agreement-list input[type="checkbox"].required-2, .agreement-list input[type="checkbox"].required-3'
);

// 필수 약관 체크 여부 확인 함수
function areRequiredCheckboxesChecked() {
  return Array.from(requiredCheckboxes).every(checkbox => checkbox.checked);
}

document.addEventListener('DOMContentLoaded', () => {
  // 1) 아이디, 비밀번호 형식 오류 메세지 추가 기능
  idField.addEventListener('input', () => {
    const idValue = idField.value;
    if (!idValue.includes('@') || !idValue.includes('.')) {
      idError.classList.add('is-invalid');
    } else {
      idError.classList.remove('is-invalid');
    }
  });

  pwField.addEventListener('input', () => {
    const pwValue = pwField.value;

    if (pwValue.length < 6 || pwValue.length > 16) {
      pwError.classList.add('is-invalid');
    } else {
      pwError.classList.remove('is-invalid');
    }
  });

  pwConfirmField.addEventListener('input', () => {
    if (pwConfirmField.value !== pwField.value) {
      pwConfirmError.classList.add('is-invalid');
    } else {
      pwConfirmError.classList.remove('is-invalid');
    }
  });


  // 2) 아이디 중복 확인
  async function checkIdDuplication() {
    const idValue = idField.value;
    const users = await pb.collection('users_collection').getFullList({ filter: `email = "${idValue}"` });

    const isDuplicate = users.length > 0;

    if (isDuplicate) {
      IdDuplicate = true;
      alert('동일한 이메일이 존재합니다.');
    } else {
      alert('사용 가능한 이메일입니다!');
      IdDuplicate = false;
    }
  }

  idValidationButton.addEventListener('click', checkIdDuplication);


  // 3) 가입하기 버튼 클릭 시 유효성 확인
  registerButton.addEventListener('click', () => {
    const username = nameField.value;
    const email = idField.value;
    const password = pwField.value;
    const passwordConfirm = pwConfirmField.value;

    // (1) 필수 정보를 입력했는지 확인
    if (!email || !password || !username) {
      alert('필수 정보를 입력해주세요!');
    } else {
      // (2) 유효성 검사 통과 확인
      if (!IdDuplicate && !pwError.classList.contains('is-invalid') && !pwConfirmError.classList.contains('is-invalid')) {
        // (3) 필수 약관 체크 여부 확인
        if (areRequiredCheckboxesChecked()) {
          const userData = { email, password, passwordConfirm, username, "emailVisibility": true };
          pb.collection('users_collection').create(userData)
            .then(() => {
              alert('회원가입이 완료되었습니다!');
              location.herf = '/src/pages/mainPage/mainPage.html'
            })
            .catch((error) => {
              alert('회원가입이 정상적으로 처리되지 않았습니다.');
            });
        } else {
          alert('필수 이용 약관을 동의해주세요');
        }
      } else {
        console.log("Validation failed");
        alert('회원가입이 정상적으로 처리되지 않았습니다.');
      }
    }
  });
});

// 이용동의약관 전체선택에 따른 체크박스 클릭 & 해제
document.addEventListener('DOMContentLoaded', function() {

  completeAgreement.addEventListener('change', () => {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = completeAgreement.checked;
    });
  });

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function() {
      if (!checkbox.checked) {
        completeAgreement.checked = false;
      } else {
        const allChecked = Array.from(checkboxes).every(cb => cb.checked);
        if (allChecked) {
          completeAgreement.checked = true;
        }
      }
    });
  });
});
