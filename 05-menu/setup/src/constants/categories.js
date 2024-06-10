import items from "./index";

const map = new Map();

for (let itemIndex in items) {
    const category = items[itemIndex].category;
    if (!map.has(category)) {
        map.set(category, itemIndex);
    }
}
// Get the desired category array
const result = ["all", ...map.keys()]
export default result;