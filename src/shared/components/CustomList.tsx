import { Box } from "@mui/material";
import React from "react";

interface ICustomList {
  title: String;
  description: string;
}

interface IList {
  text: ICustomList[];
}

export const CustomList: React.FC<IList> = ({ text }) => {
  return (
    <>
      <Box>
        {text.map((data: ICustomList, id: React.Key) => {
            const idNumber = Number(id)
          return (
            <ul key={idNumber}>
              <li>
                <span>{data.title}: </span>
                {data.description}
              </li>
            </ul>
          );
        })}
      </Box>
    </>
  );
};
