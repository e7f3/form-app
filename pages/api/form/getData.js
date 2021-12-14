// Api для ответа на запрос mock данными

export default function handler(req, res) {
  const formData = [
    {
      name: "name",
      label: "Имя",
      type: "STRING",
      max_length: 255,
      min_lengh: 3,
      regex: "^[a-zA-Zs]+$",
    },
    {
      name: "surname",
      label: "Фамилия",
      type: "STRING",
      max_length: 255,
      min_lengh: 3,
      regex: "^[a-zA-Zs]+$",
    },
    {
      name: "age",
      label: "Полных лет",
      type: "NUMBER",
      min: 1,
      max: 100,
    },
    {
      name: "email",
      label: "Email",
      type: "EMAIL",
    },
  ];
  res.status(200).json({ formData });
}
