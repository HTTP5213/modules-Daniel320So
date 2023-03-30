// Import theShire and buckland
import { theShire, buckland } from "./another-module.js";

const statement = () => `${theShire.name} was founded ${buckland.founding - theShire.founding} years before ${buckland.name}.`;

// Export theShire and statement
export { theShire, statement };