import crypto from "crypto";
import fs from "fs";

export const generateToken = (size: number) => {
  return crypto.randomBytes(size).toString("hex");
};

export const mapToJSON = (map: Map<any, any>) => {
  const obj = {};
  map.forEach((value, key) => {
    obj[key] = value;
  });
  return obj;
};

export const paginateArray = (arr: any[], page: number, pageSize: number) =>
  arr.slice((page - 1) * pageSize, page * pageSize);

export const randomInt = (min: number, max: number) =>
  Math.random() * (max - min + 1) + min;

export const deleteFile = (filePath: string) => {
  fs.unlink(filePath, (err) => {
    if (err) throw err;
  });
};
