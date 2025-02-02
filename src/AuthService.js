import { Auth } from 'aws-amplify';

export const getJwtToken = async () => {
  try {
    const session = await Auth.currentSession();
    return session.getIdToken().getJwtToken();
  } catch (error) {
    console.error('Error fetching JWT token:', error);
    return null;
  }
};

export const signOut = async () => {
  try {
    await Auth.signOut();
  } catch (error) {
    console.error('Error signing out:', error);
  }
};
