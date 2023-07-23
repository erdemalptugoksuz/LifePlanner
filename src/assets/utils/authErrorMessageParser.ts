export default function (errorCode: any) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Geçersiz bir e-posta adresi girdiniz.';
    case 'auth/email-already-in-use':
      return 'Bu e-posta adresi zaten kullanımda.';
    case 'auth/user-not-found':
      return 'Böyle bir kullanıcı bulunamadı.';
    case 'auth/wrong-password':
      return 'Hatalı bir şifre girdiniz.';
    case 'auth/weak-password':
      return 'Lütfen 6 veya daha fazla karakter içeren bir şifre giriniz.';

    default:
      return errorCode;
  }
}
