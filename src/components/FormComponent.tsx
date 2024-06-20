import { useState } from "react";

interface FormValues {
  Nom: string;
  Prenom: string;
  Email: string;
  Tel: string;
  Fonction: string;
  Techno: string;
  Langages: string;
}

const FormComponent: React.FC = () => {
  const [formValues, setFormValue] = useState<FormValues>({
    Nom: "",
    Prenom: "",
    Email: "",
    Tel: "",
    Fonction: "",
    Techno: "",
    Langages: "",
  });

  //   const [errors, setErrors] = useState<FormValues>({
  //     Nom: "",
  //     Prenom: "",
  //     Email: "",
  //     Tel: "",
  //     Fonction: "",
  //     Techno: "",
  //     Langages: "",
  //   });

  const fonctions = [
    "Choisissez votre fonction",
    "Front-End",
    "Back-End",
    "FullStack",
    "Dev-Ops",
    "Mobile-Dev",
    "Logiciel-Dev",
    "UI/UX-Designer",
  ];

  const technos = [
    "Choisissez votre framework",
    "Angular",
    "Astro",
    "Adobe XD",
    "React",
    "NodeJS",
    "Laravel",
    "Symphony",
    "Flutter",
    "React Native",
    "VueJS",
    "NextJS",
    "NestJS",
    "Django",
    "SpringBoot",
    "Figma",
  ];

  const langages = [
    "Choisissez votre langage",
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "PHP",
    "Dart",
    "Java",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("formulaire soumit", formValues);
  };

  //   const validate = () => {
  //     let valid = true;
  //     let newErrors: FormValues = {
  //       Nom: "",
  //       Prénom: "",
  //       Email: "",
  //       Tel: "",
  //       Fonction: "",
  //       Techno: "",
  //       Langages: "",
  //     };

  //     if(!formValues.Nom){
  //         newErrors.Nom = 'Le'
  //     }
  //   };

  return (
    <div>
      <form action="" className="font-sans" onSubmit={handleSubmit}>
        <div className=" space-y-4">
          <div>
            <label htmlFor="nom" className="label_form">
              Nom
            </label>
            <input
              type="text"
              id="nom"
              name="Nom"
              className="input_form"
              placeholder="Saisissez votre nom"
              //   value={formValues.Nom}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="prenom" className="label_form">
              Prénom
              <input
                type="text"
                id="prenom"
                name="Prenom"
                placeholder="Saisissez votre prenom"
                className="input_form"
                // value={formValues.Prenom}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="email" className="label_form">
              Email
              <input
                type="email"
                name="Email"
                id="email"
                placeholder="exemple@gmail.com"
                className="input_form"
                // value={formValues.Email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="tel" className="label_form">
              Tel
              <input
                type="text"
                id="tel"
                name="Tel"
                placeholder="066060080"
                className="input_form"
                // value={formValues.Tel}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="fonction" className="label_form">
              Vous êtes un(e) ?
            </label>
            <select
              name="Fonction"
              id="fonction"
              className="input_select"
              //   value={formValues.Fonction}
              onChange={handleChange}
            >
              {fonctions.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="tech" className="label_form">
              Vous utilisez quel framework ?
            </label>
            <select
              name="Techno"
              id="tech"
              className="input_select"
              //   value={formValues.Techno}
              onChange={handleChange}
            >
              {technos.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div className=" mb-8">
            <label htmlFor="langage" className="label_form">
              Vous êtes un(e) ?
            </label>
            <select
              name="Langages"
              id="langage"
              className="input_select"
              //   value={formValues.Langages}
              onChange={handleChange}
            >
              {langages.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="py-3 w-full text-center bg-darkBlue text-gray-100 text-xl font-semibold rounded-md mt-14"
        >
          Inscription
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
