import axios from 'axios'

export default async function FetchContributorsApi(repoName) {
    const url = "https://api.github.com/repos/catalyst/";

    try {
      const contributorsList = await axios.get(url+repoName+"/contributors");
      return contributorsList
    } catch (error) {
      console.error(error);
    }
}
