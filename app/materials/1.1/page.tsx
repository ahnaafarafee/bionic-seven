import SubjectList from "@/components/subject-list";

const subjects = [
  {
    id: "bme1101",
    courseCode: "BME 1101",
    courseTitle: "Introduction to Biomedical Engineering",
    imgSrc: "/subject-pics/bme.webp",
  },
  {
    id: "eee1103",
    courseCode: "EEE 1103",
    courseTitle: "Electrical Fundamentals for Biomedical Engineering",
    imgSrc: "/subject-pics/eee.webp",
  },
  {
    id: "che1105",
    courseCode: "CHE 1105",
    courseTitle: "Physical and Inorganic Chemistry",
    imgSrc: "/subject-pics/che.webp",
  },
  {
    id: "math1107",
    courseCode: "MATH 1107",
    courseTitle: "Applied Mathematics",
    imgSrc: "/subject-pics/math.webp",
  },
  {
    id: "hum1109",
    courseCode: "HUM 1109",
    courseTitle: "Communicative Skills",
    imgSrc: "/subject-pics/hum.webp",
  },
];

export default function FirstYearFirstSemesterMaterials() {
  return <SubjectList subjects={subjects} />;
}
