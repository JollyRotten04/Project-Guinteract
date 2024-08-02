import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowerRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import './index.css';


const router = createBrowerRouter({
  path: 'patient',
  element: <PatientSidebar />,
  children: [
    {
      path: 'dashboard',
      element: <PatientDashboardMain />,
    },
    {
      path: 'my-appointments',
      element: <PatientsMyAppointments />,
    },
    {
      path: 'create-an-appointment',
      element: <AppointmentMain />,
      children: [
        {
          index: true,
          element: <Specializations />
        },
        {
          path: 'find-your-doctor',
          element: <Doctors />
        },
        {
          path: 'select-preferred-date-and-time',
          element: <Step3Main />
        },
        {
          path: 'payment',
          element: <PaymentMain />
        }
      ]
    }
  ],
},
{
  path: 'doctor',
  element: <DoctorSidebar />,
  children: [
    {
      path: 'dashboard',
      element: <DoctorDashboardMain />,
    },
    {
      path: 'my-appointment',
      element: <DoctorMyAppointments />,
    },
    {
      path: 'my-availability',
      element: <MyAvailabilityMain />
    },
    {
      path: 'my-patients',
      element: <MyPatients />
    }
  ],
},
{
  path: 'welcome-page-doctor',
  element: <WelcomePageDoctor />,
},
{
  path: 'welcome-page-patient',
  element: <WelcomePagePatient />,
},
{
  path: 'future-feat',
  element: <UnderConstruction />,
},
{
  path: 'create-account',
  element: <CreateAccountMain />,
  children: [
    {
      path: 'personal-information',
      element: <PersonalInformation />,
    },
    {
      path: 'contact-information',
      element: <ContactInformation />,
    },
    {
      path: 'medical-history',
      element: <MedicalHistory />,
    },
    {
      path: 'consent-and-authorization',
      element: <ConsentAndAuthorization />,
    },
  ],
},
{
  path: 'create-account-doctor',
  element: <CreateAccountDoctors />,
  children: [
    {
      path: 'personal-information',
      element:  <PersonalInformationDoctors />,
    },
    {
      path: 'professional-information',
      element: <ProfessionalInformation />,
    },
    {
      path: 'contact-information',
      element: <ContactInformationDoctors />,
    },
    {
      path: 'consultation-location-preference',
      element: <ConsultationLocationPreference />,
    },
    {
      path: 'appointment-preference',
      element: <AppointmentPreference />,
    },
    {
      path: 'consent-and-authorization',
      element: <ConsentAndAuthorizationDoctors />,
    },
  ],
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
