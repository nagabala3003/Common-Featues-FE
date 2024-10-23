import { Table } from "@mui/material";
import Table1 from "../../reusable_components/tables/table1";
import { useEffect, useState } from "react";
import Card1 from "../../reusable_components/cards/card1";
import { faker } from "@faker-js/faker";
import useDebounce from "../../../hooks/useDebounce";
import useThrottling from "../../../hooks/useThrottling";

interface Column {
  id: "name" | "code" | "population" | "size" | "density";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

function createData(
  name: string,
  code: string,
  population: number,
  size: number
): Data {
  const density = population / size;
  return { name, code, population, size, density };
}

const rowsData = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

interface CardData {
  id: number;
  name: string;
  email: string;
  joinedOn: Date;
  commentCount: number;
}
const UsersList = () => {
  console.log("UsersList called");

  const [headers, setHeaders] = useState(columns);
  const [data, setData] = useState(rowsData);
  const [data1, setData1] = useState("");
  const [cardData, setCardData] = useState<any[]>([]);
  const [debouncedText, setDebouncedText] = useState("");
  const [throttlingText, setThrottlingText] = useState("");

  useEffect(() => {
    const users = [];

    // Loop to generate 5000 user data entries
    for (let i = 0; i < 5000; i++) {
      const user = {
        id: i + 1,
        name: faker.person.fullName(),
        email: faker.internet.email(),
        joinedOn: faker.date.recent(),
        commentCount: faker.number.int({ min: 0, max: 100 }),
      };
      users.push(user);
    }

    setCardData(users);
  }, []);

  const handleChange = (e: any) => {
    setData1(e.target.value);
    debouncedUpdate(e.target.value);
    throttlingUpdate(e.target.value);
  };

  const debouncedUpdate = useDebounce({
    cb: (input) => {
      setDebouncedText(input);
    },
    delay: 500,
  });

  const throttlingUpdate = useThrottling({
    cb: (input) => {
      setThrottlingText(input);
    },
    delay: 500,
  });
  return (
    <>
      <input
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <h1>DebouncedText: {debouncedText}</h1>
      <h1>ThrottlingText: {throttlingText}</h1>
      {/* <Table1 headers={headers} data={data}/> */}
      <Card1 cardData={cardData} loadMore={() => {}} />
    </>
  );
};

export default UsersList;
