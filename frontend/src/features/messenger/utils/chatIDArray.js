import { v4 as uuidv4 } from 'uuid';

const chatIDArray = [];

for (let index = 0; index < 5; index += 1) {
  chatIDArray.push(uuidv4());
}

export default chatIDArray;
