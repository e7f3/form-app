const defaultStore = {
  formData: {},
  stepSettings: [],
  lastStep: -1,
};

export const ADD_STEP_SETTINGS = "ADD_STEP_SETTINGS";
export const UPDATE_FORM_DATA = "UPDATE_FORM_DATA";

export const formReducer = (store = defaultStore, action) => {
  switch (action.type) {
    case ADD_STEP_SETTINGS:
      return {
        ...store,
        stepSettings: [...store.stepSettings, action.payload],
        lastStep: store.lastStep + 1,
      };

    case UPDATE_FORM_DATA:
      const { key, value } = action.payload;
      return {
        ...store,
        formData: {
          ...store.formData,
          [key]: {
            ...store.formData[key],
            value,
          },
        },
      };

    default:
      return store;
  }
};

export const AddStepSettingsAction = (payload) => ({
  type: ADD_STEP_SETTINGS,
  payload,
});
export const UpdateFormDataAction = (payload) => ({
  type: UPDATE_FORM_DATA,
  payload,
});
