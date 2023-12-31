import nutriousImage from "../src/img/nuturious.jpg";
import friendlyVisitImage from "../src/img/friendlyvisit.jpg";
import safetyCheckImage from "../src/img/safetycheck.jpg";
import logo1 from "../src/img/logo1.jpg";
import logo2 from "../src/img/logo2.png";
import logo3 from "../src/img/logo3.png";
import logo4 from "../src/img/logo4.png";
import logo5 from "../src/img/logo5.jpg";
let aboutUs = [
  {
    src: nutriousImage,
    title: "NUTRITIOUS MEAL",
    about:
      "Adequate nutrition is necessary for health, functionality and the ability to remain independent. Healthy eating can increase mental acuity, resistance to illness and disease, energy levels, immune system strength, recuperation speed and the ability to manage chronic health problems.",
  },
  {
    src: friendlyVisitImage,
    title: "FRIENDLY VISIT",
    about:
      "For many, the trusted Meals on Wheels volunteer or staff member who shows up every day with a meal and a smile is the only person they see or speak with all day. This special delivery is the reason to get up in the morning, something to look forward to, and a reminder to take good care of themselves.",
  },
  {
    src: safetyCheckImage,
    title: "SAFETY CHECK",
    about:
      "Along with the inevitable impacts of aging come the increased risks of medical emergencies, falls and other accidents. The safety check that accompanies each meal delivery ensures that, in the case of an emergency or problem, medics will be called, families will be notified and our seniors will not be forgotten.",
  },
];

const logo = Array.from({ length: 36 }, (_, index) => {
  const logos = [logo1, logo2, logo3, logo4, logo5];
  return logos[index % logos.length];
});

const volunteer = [
  {
    id: 1,
    title: "Meals on Wheels Volunteer",
    description: [
        "Decorated placemats are often welcome, too",
        "Assist Kitchen Staff in all aspects of packing meals",
        "Volunteers Needed: Shifts available Monday-Thursday from 8:30 am– 11:00 am or 1:00 pm to 3:00 pm",
        "Clean driving record and vehicle insurance",
      ],
  },
  {
    id: 2,
    title: "Meals on Wheels Partner",
    description: [
      "Decorated placemats are often welcome, too",
      "Assist Kitchen Staff in all aspects of packing meals",
      "Volunteers Needed: Shifts available Monday-Thursday from 8:30 am– 11:00 am or 1:00 pm to 3:00 pm",
      "Clean driving record and vehicle insurance",
    ],
  },
  {
    id : 3,
    title : "Meals on Wheels Care-giver",
    description: [
        "Decorated placemats are often welcome, too",
        "Assist Kitchen Staff in all aspects of packing meals",
        "Volunteers Needed: Shifts available Monday-Thursday from 8:30 am– 11:00 am or 1:00 pm to 3:00 pm",
        "Clean driving record and vehicle insurance",
      ],
  }
];

export { aboutUs, logo, volunteer };
