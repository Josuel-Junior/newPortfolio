import { Box } from "@mui/material";
import React from "react";

interface ICustomList {
  title: string;
  description: string;
}

interface IList {
  text: ICustomList[];
}

export const CustomList: React.FC<IList> = ({ text }) => {
  return (
    <Box>
      {text.map((data: ICustomList, id: React.Key) => {
        return (
          <ul key={id}>
            <li>
              <span style={{ fontWeight:"bold" }}>{data.title} </span>
              {data.description}
            </li>
          </ul>
        );
      })}
    </Box>
  );
};
