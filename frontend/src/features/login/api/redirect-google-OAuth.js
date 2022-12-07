import fetchUser from '../../../utils/getUser';

const redirectToGoogleOAuth = () => {
  let timer = null;

  const googleLoginURL = 'http://localhost:8080/auth/google';

  const newWindow = window.open(
    googleLoginURL,
    '_blank',
    'width=500,height=600',
  );

  if (newWindow) {
    timer = setInterval(() => {
      if (newWindow.closed) {
        fetchUser();
        if (timer) clearInterval(timer);
        window.location.replace('http://localhost:3000');
      }
    });
  }
};

export default redirectToGoogleOAuth;
