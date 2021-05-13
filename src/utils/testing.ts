import { Types } from "mongoose";

import { generateToken } from "./Utils";

const mongodbId = () => Types.ObjectId(generateToken(12));

export default {
  mongodbId,
};
