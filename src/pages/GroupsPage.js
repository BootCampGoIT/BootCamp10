import React from "react";
import GroupsForm from "../Components/groups/groupsForm/GroupsForm";
import GroupsList from "../Components/groups/groupsList/GroupsList";
import Modal from "../Components/modal/Modal";
import AddItem from "../Components/reusableComponents/addItem/AddItem";
import Section from "../Components/section/Section";
import DetailsPage from "./DetailsPage";
import { Route, useRouteMatch } from "react-router-dom";

const GroupsPage = ({
  history,
  location,
  methods,
  filter,
  isGroupFormOpen,
  tutors,
}) => {
  const match = useRouteMatch();
  return (
    <>
      <hr />
      <label>
        Filter:
        <input type='text' onChange={methods.setFilter} value={filter} />
      </label>
      <hr />
      <Section title='groups'>
        <GroupsList
          groups={methods.getFilteredGroups()}
          deleteGroup={methods.deleteGroup}>
          <AddItem openForm={methods.toggleGroupForm} />
        </GroupsList>
        {isGroupFormOpen && (
          <Modal toggleModal={methods.toggleGroupForm}>
            <GroupsForm
              addGroup={methods.addGroup}
              tutors={tutors}
              closeForm={methods.toggleGroupForm}
            />
          </Modal>
        )}
      </Section>
      <button type='button' onClick={() => history.push(location.state.from)}>
        Go back
      </button>
      <Route path={match.path + "/:id"} component={DetailsPage} />
    </>
  );
};

export default GroupsPage;
