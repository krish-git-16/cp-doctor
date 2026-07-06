const axios = require("axios");

const getUserInfo = async (handle) => {
  try {
    const response = await axios.get(`https://codeforces.com/api/user.info?handles=${handle}`);

    return response.data.result[0];
  } catch (error) {
    throw new Error("Failed to fetch user information.");
  }
};

const getContestHistory = async (handle) => {
  try {
    const response = await axios.get(`https://codeforces.com/api/user.rating?handle=${handle}`);

    return response.data.result;
  } catch (error) {
    throw new Error("Failed to fetch contest history.");
  }
};

const getSubmissions = async (handle) => {
  try {
    const response = await axios.get(`https://codeforces.com/api/user.status?handle=${handle}`);

    return response.data.result;
  } catch (error) {
    throw new Error("Failed to fetch submissions.");
  }
};

module.exports = { getUserInfo, getContestHistory, getSubmissions };