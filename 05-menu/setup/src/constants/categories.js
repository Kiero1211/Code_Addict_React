import items from "./index";

const uniqueCategories = new Set(items.map(item => item.category));
// Get the desired category array
const result = ["all", ...uniqueCategories]
export default result;