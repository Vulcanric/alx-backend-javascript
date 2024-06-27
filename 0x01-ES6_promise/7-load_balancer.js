// This function works with Promise.race() to retreive the first promise that is resolved

export default function loadBalancer(chinaDownload, USDownload) { // Takes promises as arguments
  return Promise.race([chinaDownload, USDownload]).then((fastestValue) => fastestValue);
}
