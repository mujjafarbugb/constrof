import React from "react";
import HomeBredCurbs from "./HomeBredCurbs";
import ContracTable from "./ContracTable";

const ContractorsList = () => {
  const data = [
    {
      userName: "Mayur PM",
      userCode: 301100,
      email: "john@example.com",
      mobile: 7568276384,
      firmName: "Mayur",
      firmRepresentative: "Shri Avchit Constructions",
      representativeDesignation: "Proprietor",
      website: "www.google.com",
      preferredCities: "pune",
      yearOfEst: "2024",
      remark:
        "We are a contracting firm currently working on a Railway Projects.",
      regOn: "28-02-2024",
    },
    {
      userName: "Mayur PM",
      userCode: 301100,
      email: "john@example.com",
      mobile: 7568276384,
      firmName: "Mayur",
      firmRepresentative: "Shri Avchit Constructions",
      representativeDesignation: "Proprietor",
      website: "www.google.com",
      preferredCities: "pune",
      yearOfEst: "2024",
      remark:
        "We are a contracting firm currently working on a Railway Projects.",
      regOn: "28-02-2024",
    },
    {
      userName: "Mayur PM",
      userCode: 301100,
      email: "john@example.com",
      mobile: 7568276384,
      firmName: "Mayur",
      firmRepresentative: "Shri Avchit Constructions",
      representativeDesignation: "Proprietor",
      website: "www.google.com",
      preferredCities: "pune",
      yearOfEst: "2024",
      remark:
        "We are a contracting firm currently working on a Railway Projects.",
      regOn: "28-02-2024",
    },
    {
      userName: "Mayur PM",
      userCode: 301100,
      email: "john@example.com",
      mobile: 7568276384,
      firmName: "Mayur",
      firmRepresentative: "Shri Avchit Constructions",
      representativeDesignation: "Proprietor",
      website: "www.google.com",
      preferredCities: "pune",
      yearOfEst: "2024",
      remark:
        "We are a contracting firm currently working on a Railway Projects.",
      regOn: "28-02-2024",
    },
    {
      userName: "Mayur PM",
      userCode: 301100,
      email: "john@example.com",
      mobile: 7568276384,
      firmName: "Mayur",
      firmRepresentative: "Shri Avchit Constructions",
      representativeDesignation: "Proprietor",
      website: "www.google.com",
      preferredCities: "pune",
      yearOfEst: "2024",
      remark:
        "We are a contracting firm currently working on a Railway Projects.",
      regOn: "28-02-2024",
    },
    {
      userName: "Mayur PM",
      userCode: 301100,
      email: "john@example.com",
      mobile: 7568276384,
      firmName: "Mayur",
      firmRepresentative: "Shri Avchit Constructions",
      representativeDesignation: "Proprietor",
      website: "www.google.com",
      preferredCities: "pune",
      yearOfEst: "2024",
      remark:
        "We are a contracting firm currently working on a Railway Projects.",
      regOn: "28-02-2024",
    },
    {
      userName: "Mayur PM",
      userCode: 301100,
      email: "john@example.com",
      mobile: 7568276384,
      firmName: "Mayur",
      firmRepresentative: "Shri Avchit Constructions",
      representativeDesignation: "Proprietor",
      website: "www.google.com",
      preferredCities: "pune",
      yearOfEst: "2024",
      remark:
        "We are a contracting firm currently working on a Railway Projects.",
      regOn: "28-02-2024",
    },
  ];

  return (
    <>
      <HomeBredCurbs title="Clients List " />
      <div className="container mx-auto">
        <ContracTable data={data} />
      </div>
    </>
  );
};

export default ContractorsList;
