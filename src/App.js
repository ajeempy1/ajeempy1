import React, { Component } from 'react';
import TrainingIndex from './Training/Training_index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Account/Register';
import Login from './Account/Login';
import Logout from './Account/Logout';
import StudentEdit from './Account/StudentEdit';
import SmeEdit from './Account/SmeEdit';
import Dashboard_view from './Account/Dashboard_view';
import PaymentError from './Account/PaymentError';
import PaymentHandler from './Account/PaymentHandler';
import PaymentSuccess from './Account/PaymentSuccess';
import UpdateEmail from './Account/UpdateEmail';
import Password_change_form from './Account/Password_change_form';

import AddStudent from './Assignment/AddStudent';
import AssessmentList from './Assignment/AssessmentList';
import AssignmentDetail from './Assignment/AssignmentDetail';
import AssignmentList from './Assignment/AssignmentList';
import StudentList from './Assignment/StudentList';
import UploadAssignment from './Assignment/UploadAssignment';

import AboutPage from './Sme/AboutPage';
import AboutPageList from './Sme/AboutPageList';
import AddReview from './Sme/AddReview';
import BookingDemoPage from './Sme/BookingDemoPage';
import BookingFormPage from './Sme/BookingFormPage';
import CoursePlanDetail from './Sme/CoursePlanDetail';
import CoursePlanList from './Sme/CoursePlanList';
import CreateCourse from './Sme/CreateCourse';
import CreateReview from './Sme/CreateReview';
import CreateWebinar from './Sme/CreateWebinar';
import InterviewRemarkForm from './Sme/InterviewRemarkForm';
import InterviewRemarkList from './Sme/InterviewRemarkList';
import MentorshipForm from './Sme/MentorshipForm';
import MentorshipList from './Sme/MentorshipList';
import ReviewList from './Sme/ReviewList';
import SmeDetail from './Sme/SmeDetail';
import SmeForm from './Sme/SmeForm';
import SMEListPage from './Sme/SMEListPage';
import SmeProfile from './Sme/SmeProfile';
import WebinarList from './Sme/WebinarList';
import Coursesmelist from './Sme/Coursesmelist';
import AssessmentPage from './Sme/AssessmentPage';

import Contact from './Training/Contact';
import ContactSuccess from './Training/ContactSuccess';
import CreateView from './Training/CreateView';
import DeleteView from './Training/DeleteView';
import Project from './Training/Project';
import RegistrationWebinar from './Training/RegistrationWebinar';
import Team from './Training/Team';
import WebinarPage from './Training/WebinarPage';

import CreateProject from './User_profile/CreateProject';
import CreateResume from './User_profile/CreateResume';
import CreateSkill from './User_profile/CreateSkill';
import ExperienceCreate from './User_profile/ExperienceCreate';
import ExperienceList from './User_profile/ExperienceList';
import ExperienceUpdate from './User_profile/ExperienceUpdate';
import ProjectDelete from './User_profile/ProjectDelete';
import ProjectList from './User_profile/ProjectList';
import ResumeDetail from './User_profile/ResumeDetail';
import ResumeList from './User_profile/ResumeList';
import ResumeUpdate from './User_profile/ResumeUpdate';
import SkillList from './User_profile/SkillList';
import UpdateProject from './User_profile/UpdateProject';
import ResumeUpload from './User_profile/ResumeUpload';

import DjangoList from './Video_uploads/DjangoList';
import PythonList from './Video_uploads/PythonList';
import VideoUpload from './Video_uploads/VideoUpload';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<TrainingIndex />} />
            <Route path="/Account/Register" element={<Register />} />
            <Route path="/Account/Login" element={<Login />} />
            <Route path="/Account/Logout" element={<Logout />} />
            <Route path="/Account/StudentEdit" element={<StudentEdit />} />
            <Route path="/Account/SmeEdit" element={<SmeEdit />} />
            <Route path="/Account/Dashboard_view" element={<Dashboard_view />} />
            <Route path="/Account/PaymentError" element={<PaymentError />} />
            <Route path="/Account/PaymentHandler" element={<PaymentHandler />} />
            <Route path="/Account/PaymentSuccess" element={<PaymentSuccess />} />
            <Route path="/Account/UpdateEmail" element={<UpdateEmail />} />
            <Route path="/Account/Password_change_form" element={<Password_change_form />} />

            <Route path="/Assignment/AddStudent" element={<AddStudent />} />
            <Route path="/Assignment/AssessmentList" element={<AssessmentList />} />
            <Route path="/Assignment/AssignmentDetail" element={<AssignmentDetail />} />
            <Route path="/Assignment/AssignmentList" element={<AssignmentList />} />
            <Route path="/Assignment/StudentList" element={<StudentList />} />
            <Route path="/Assignment/UploadAssignment" element={<UploadAssignment />} />

            <Route path="/Sme/AboutPage" element={<AboutPage />} />
            <Route path="/Sme/AboutPageList" element={<AboutPageList />} />
            <Route path="/Sme/AddReview" element={<AddReview />} />
            <Route path="/Sme/BookingDemoPage" element={<BookingDemoPage />} />
            <Route path="/Sme/BookingFormPage" element={<BookingFormPage />} />
            <Route path="/Sme/CoursePlanDetail" element={<CoursePlanDetail />} />
            <Route path="/Sme/CoursePlanList" element={<CoursePlanList />} />
            <Route path="/Sme/CreateCourse" element={<CreateCourse />} />
            <Route path="/Sme/CreateReview" element={<CreateReview />} />
            <Route path="/Sme/CreateWebinar" element={<CreateWebinar />} />
            <Route path="/Sme/InterviewRemarkForm" element={<InterviewRemarkForm />} />
            <Route path="/Sme/InterviewRemarkList" element={<InterviewRemarkList />} />
            <Route path="/Sme/MentorshipForm" element={<MentorshipForm />} />
            <Route path="/Sme/MentorshipList" element={<MentorshipList />} />
            <Route path="/Sme/ReviewList" element={<ReviewList />} />
            <Route path="/Sme/SmeDetail" element={<SmeDetail />} />
            <Route path="/Sme/SmeForm" element={<SmeForm />} />
            <Route path="/Sme/SMEListPage" element={<SMEListPage />} />
            <Route path="/Sme/SmeProfile" element={<SmeProfile />} />
            <Route path="/Sme/WebinarList" element={<WebinarList />} />
            <Route path="/Sme/Coursesmelist" element={<Coursesmelist />} />
            <Route path="/Sme/AssessmentPage" element={<AssessmentPage />} />

            <Route path="/Training/Contact" element={<Contact />} />
            <Route path="/Training/ContactSuccess" element={<ContactSuccess />} />
            <Route path="/Training/CreateView" element={<CreateView />} />
            <Route path="/Training/DeleteView" element={<DeleteView />} />
            <Route path="/Training/Project" element={<Project />} />
            <Route path="/Training/RegistrationWebinar" element={<RegistrationWebinar />} />
            <Route path="/Training/Team" element={<Team />} />
            <Route path="/Training/WebinarPage" element={<WebinarPage />} />

            <Route path="/User_profile/CreateProject" element={<CreateProject />} />
            <Route path="/User_profile/CreateResume" element={<CreateResume />} />
            <Route path="/User_profile/CreateSkill" element={<CreateSkill />} />
            <Route path="/User_profile/ExperienceCreate" element={<ExperienceCreate />} />
            <Route path="/User_profile/ExperienceList" element={<ExperienceList />} />
            <Route path="/User_profile/ExperienceUpdate" element={<ExperienceUpdate />} />
            <Route path="/User_profile/ProjectDelete" element={<ProjectDelete />} />
            <Route path="/User_profile/ProjectList" element={<ProjectList />} />
            <Route path="/User_profile/ResumeDetail" element={<ResumeDetail />} />
            <Route path="/User_profile/ResumeUpdate" element={<ResumeUpdate />} />
            <Route path="/User_profile/ResumeList" element={<ResumeList />} />
            <Route path="/User_profile/SkillList" element={<SkillList />} />
            <Route path="/User_profile/UpdateProject" element={<UpdateProject />} />
            <Route path="/User_profile/ResumeUpload" element={<ResumeUpload />} />

            <Route path="/Video_uploads/DjangoList" element={<DjangoList />} />
            <Route path="/Video_uploads/PythonList" element={<PythonList />} />
            <Route path="/Video_uploads/VideoUpload" element={<VideoUpload />} />
        </Routes>
    </BrowserRouter>
    );
  }
}

export default App;

