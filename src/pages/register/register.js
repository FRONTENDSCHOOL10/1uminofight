import '/src/components/Header.js';
import '/src/components/footer/footer.js';
import { getNode } from 'kind-tiger';
import '/src/components/input-text.js';
import pb from '/src/api/pocketbase';

// email -> 중복확인 색깔 변경 (@랑 . 포함)
// 비밀번호 -> 가입하기 버튼 누를 때 유효성 체크

// 1. email을 정규 표현식에 맞게 입력했는지 확인.
let IdDuplicate = false;
const idField = getNode('#idField');
const idError = getNode('.id-error-message');
const pwField = getNode('#pwField');
const pwError = getNode('.pwd-error-message');
const pwConfirmField = getNode('#pwConfirmField');
const pwConfirmError = getNode('.pwd-confirm-error-message');
const idValidationButton = getNode('.id-validation');
const registerButton = getNode('.register-button');
const nameField = getNode('#userName');

document.addEventListener('DOMContentLoaded', () => {
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

  async function checkIdDuplication() {
    const idValue = idField.value;
    const users = await pb.collection('users_collection').getFullList({filter: `email = "${idValue}"`});

    const isDuplicate = users.length > 0;

    if (isDuplicate) {
      IdDuplicate = true;
      alert('동일한 이메일이 존재합니다.');
    } else {
      alert('중복된 이메일이 없습니다!');
      IdDuplicate = false;
    }
  }
  idValidationButton.addEventListener('click', checkIdDuplication);

  registerButton.addEventListener('click', () => {
    const username = nameField.value;
    const email = idField.value;
    const password = pwField.value;
    const passwordConfirm = pwConfirmField.value;

    if (!IdDuplicate && !pwError.classList.contains('is-invalid') && !pwConfirmError.classList.contains('is-invalid')) {
      pb.collection('users_collection').create({email, password, passwordConfirm, username}).then(() => {
        alert('회원가입이 완료되었습니다!');
      }).catch(() => {
        alert('회원가입이 정상적으로 처리되지 않았습니다.');
      });
    }
  });
});
