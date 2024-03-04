export const catchError = (error) => {
  const { response } = error;
  if (response?.data) return response.data;

  return { error: error.message || error };
};

export const formatUserData = (userData) => {
  return {
    UserId: userData.id,
    Email: userData.email,
    First_Name: userData.first_name,
    Last_Name: userData.last_name,
    Profile: userData.avatar,
  };
};
