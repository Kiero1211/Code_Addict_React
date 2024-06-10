// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';

const fetchTabs = async () => {
    try {
        const response = await fetch(url);
        const tabs = await response.json();

        return tabs;
    } catch (error) {
        throw new Error(error)
    }
}

export default fetchTabs;