import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// home pages  & dashboard
const Dashboard = lazy(() => import("./pages/ClientDash"));
const Contractor = lazy(() => import("./pages/ClientDash/Contractor"));
const Contact = lazy(() => import("./pages/ClientDash/Contact"));
const Request = lazy(() => import("./pages/ClientDash/Request"));
const AllContractor = lazy(() => import("./pages/ClientDash/AllContractor"));
const Profile1 = lazy(() => import("./pages/ClientDash/Profile1"));
const Basic = lazy(() => import("./pages/ClientDash/Basic"));
const Projects = lazy(() => import("./pages/ClientDash/Projects"));
const Uploads = lazy(() => import("./pages/ClientDash/Uploads"));
const EOIS = lazy(() => import("./pages/ClientDash/EOIS"));
const EoiDetail = lazy(() => import("./pages/ClientDash/EoiDetail"));
const CreateEoi = lazy(() => import("./pages/ClientDash/CreateEoi"));
const LiveEois = lazy(() => import("./pages/ClientDash/LiveEois"));
const DraftEois = lazy(() => import("./pages/ClientDash/DraftEois"));
const ClosedEois = lazy(() => import("./pages/ClientDash/ClosedEois"));
const Logout = lazy(() => import("./pages/ClientDash/Logout"));
const ViewProf = lazy(() => import("./pages/ClientDash/ViewProf"));

const ContractorDash = lazy(() => import("./pages/ContractorDash"));
const AllClient = lazy(() => import("./pages/ContractorDash/AllClient"));
const RegisterClient = lazy(() =>
  import("./pages/ContractorDash/RegisterClient")
);
const Request1 = lazy(() => import("./pages/ContractorDash/Request1"));
const Assets = lazy(() => import("./pages/ContractorDash/Assets"));
const CompleteProj = lazy(() => import("./pages/ContractorDash/CompleteProj"));
const ContractorBasic = lazy(() =>
  import("./pages/ContractorDash/ContractorBasic")
);
const ContUpload = lazy(() => import("./pages/ContractorDash/ContUpload"));
const OngoingProj = lazy(() => import("./pages/ContractorDash/OngoingProj"));
const Turnover = lazy(() => import("./pages/ContractorDash/Turnover"));
const ContactUs = lazy(() => import("./pages/ContractorDash/ContactUs"));
const FindEoi = lazy(() => import("./pages/ContractorDash/FindEoi"));
const MyApplication1 = lazy(() =>
  import("./pages/ContractorDash/MyApplication1")
);
const ViewProf2 = lazy(() => import("./pages/ContractorDash/ViewProf2"));

const AdminDash = lazy(() => import("./pages/adminDash/index"));
const ClientsList = lazy(() => import("./pages/adminDash/ClientsList"));
const ContractorsList = lazy(() => import("./pages/adminDash/ContractorsList"));
const ProjectsList = lazy(() => import("./pages/adminDash/ProjectsList"));
const ProjCloseList = lazy(() => import("./pages/adminDash/ProjeCloseList"));

const Login = lazy(() => import("./pages/auth/login"));
const Register = lazy(() => import("./pages/auth/register"));
const Register2 = lazy(() => import("./pages/auth/register2"));
const Register3 = lazy(() => import("./pages/auth/register3"));
const VerifySuccessfully = lazy(() =>
  import("./pages/auth/verifySuccessfully")
);
const Verify_Otp = lazy(() => import("./pages/auth/verify"));
const ForgotPass = lazy(() => import("./pages/auth/forgot-password"));
import Layout from "./layout/Layout";
import Loading from "@/components/Loading";

function App() {
  return (
    <main className="App relative">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          }
        />
        

        <Route
          path="/register"
          element={
            <Suspense fallback={<Loading />}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path="/register2"
          element={
            <Suspense fallback={<Loading />}>
              <Register2 />
            </Suspense>
          }
        />
        <Route
          path="/register3"
          element={
            <Suspense fallback={<Loading />}>
              <Register3 />
            </Suspense>
          }
        />
        
        <Route
          path="/verifySuccessfully"
          element={
            <Suspense fallback={<Loading />}>
              <VerifySuccessfully />
            </Suspense>
          }
        />
        <Route
          path="/verify"
          element={
            <Suspense fallback={<Loading />}>
              <Verify_Otp />
            </Suspense>
          }
        />
        <Route
          path="/verify/:id"
          element={
            <Suspense fallback={<Loading />}>
              <Verify_Otp />
            </Suspense>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <Suspense fallback={<Loading />}>
              <ForgotPass />
            </Suspense>
          }
        />

        <Route path="/*" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="contractor" element={<Contractor />} />
          <Route path="basics" element={<Basic />} />
          <Route path="projects" element={<Projects />} />
          <Route path="allContractor" element={<AllContractor />} />
          <Route path="request" element={<Request />} />
          <Route path="eois" element={<EOIS />} />
          <Route path="eoiDetail" element={<EoiDetail />} />
          <Route path="createEoi" element={<CreateEoi />} />
          <Route path="liveEois" element={<LiveEois />} />
          <Route path="draftEoi" element={<DraftEois />} />
          <Route path="closedEoi" element={<ClosedEois />} />
          <Route path="uploads" element={<Uploads />} />
          <Route path="contact" element={<Contact />} />
          <Route path="logout" element={<Logout />} />
          <Route path="viewProf" element={<ViewProf />} />

          <Route path="contractorDash" element={<ContractorDash />} />
          <Route path="allClient" element={<AllClient />} />
          <Route path="registerClient" element={<RegisterClient />} />
          <Route path="request1" element={<Request1 />} />
          <Route path="assets" element={<Assets />} />
          <Route path="completeProj" element={<CompleteProj />} />
          <Route path="contractorBasic" element={<ContractorBasic />} />
          <Route path="contUpload" element={<ContUpload />} />
          <Route path="ongoingProj" element={<OngoingProj />} />
          <Route path="turnover" element={<Turnover />} />
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="findEoi" element={<FindEoi />} />
          <Route path="myApplication" element={<MyApplication1 />} />
          <Route path="viewProf2" element={<ViewProf2 />} />

          <Route path="AdminDash" element={<AdminDash />} />
          <Route path="clientsList" element={<ClientsList />} />
          <Route path="contractList" element={<ContractorsList />} />
          <Route path="projCloseList" element={<ProjCloseList />} />
          <Route path="projectsList" element={<ProjectsList />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
