'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  common: {
    RecordTable: {
      icInfo: 'There are no qualifying records'
    }
  },
  IndexPageHeader: {
    CREATE_EVENT: 'Create Incident',
    CREATE_REQUEST: 'Create Request',
    QUERY_EVENTS: 'Query Incident',
    QUERY_REQUEST: 'Query Request',
    RETRIEVE_KNOWLEDGE: 'Retrieve Knowledge',
    CONFIRM_LOG_OUT: 'Confirm Log Out?',
    LOGOUT: 'Logout',
    CANCEL: 'cancel',
    EXIT: 'logout',
    MODIFY_PERSONAL_INFORMATION: 'Modify Personal Information',
    CHANGE_PASSWORD: 'Change Password',
    LOGIN: 'Log In',
    registration: '中',
    registration_TOOLTIPS: '中英切换',
    LoginForm: {
      formHeader: 'Login',
      username_message: 'Please input your username!',
      username_placeholder: 'username',
      password_message: 'Please input your password!',
      password_placeholder: 'password',
      remember: 'Remember me',
      login_form_forgot: 'Forgot password？',
      goToRegistration: 'Or ',
      goToRegistration_Link: 'register now！',
      login_form_button: 'Log in'
    },
    UpdateUserMsgModal: {
      title: 'Modify Personal Information',
      UpdateUserMsgForm: {
        username_label: 'Real Name',
        username_message: 'Please input real name',
        sex_label: 'Sex',
        sex_man: 'Male',
        sex_woman: 'Female',
        officePhone_label: 'Office Phone',
        telephone_label: 'Telephone',
        telephone_message: 'Please input telephone',
        email_label: 'Email',
        email_message: 'Please input email',
        departmentName_label: 'Department Name',
        button: 'Submit',
        button2: 'Change Password'
      }
    },
    UpdateUserPwdModal: {
      title: 'Change Password',
      UpdateUserPwdForm: {
        username_label: 'Username',
        username_message: 'Please input username',
        originPwd_label: 'Origin Password',
        originPwd_message: 'Please input origin password',
        newPwd_label: 'New Password',
        newPwd_message: 'Please input new password',
        confirmPwd_label: 'Confirm Password',
        confirmPwd_message: 'Please input confirm password',
        button: 'Submit',
        button2: 'Reset',
        checkPassword: 'Two passwords that you enter is inconsistent!'
      }
    }
  },
  LoginContent: {
    input: 'Search by keywords, such as "documentation and user manual"',
    submitButton: 'Retrieval',
    retrievalLabel: 'Popular Retrieval：',
    itemMsgLabel_IT_SERVICE_HOTLINE: 'IT Service Hotline',
    itemMsgLabel_EMAIL_ADDRESS: 'Email',
    itemMsgLabel_COMPLAINT_HOTLINE: 'Complaint Hotline',
    submitFeedback: 'Submit Feedback'
  },
  IndexPageContent: {
    headerWords_OVERVIEW: 'Overview',
    headerWords_MY_REQUEST: 'My Requests',
    headerWords_REQUEST_RECORDS: 'Request Records',
    headerWords_MY_INCIDENT: 'My Incidents',
    headerWords_INCIDENT_RECORDS: 'Incident Records',
    headerWords_CONTACT_US: 'Contact Us',
    showAll: 'View All',
    Total: {
      totalItemContainer_MY_REQUESTS: 'My Requests',
      totalItemContainer_MY_UNFINIDHED_REQUESTS: 'My Unfinished Requests',
      totalItemContainer_TO_CONFIRM_REQUESTS: 'Requests To Confirm',
      totalItemContainer_MY_INCIDENTS: 'My Incidents',
      totalItemContainer_MY_UNFINIDHED_INCIDENTS: 'My Unfinished Incidents',
      totalItemContainer_TO_CONFIRM_INCIDENTS: 'Incidents To Confirm'
    },
    RequestHistogram: {
      labelItems_PROCESSED: 'Processed',
      labelItems_UNFINISHED: 'Unfinished',
      labelItems_TO_ACCEPT: 'To Accept',
      labelItems_TO_APPROVE: 'To Approve',
      labelItems_TO_CONFIRM: 'To Confirm',
      labelItems_CREATED: 'Created',
      labelItems_REQUESTED: 'Requested'
    },
    EventHistogram: {
      labelItems_TO_DISPATCH: 'To Dispatch',
      labelItems_UNSOLVED: 'Unsolved',
      labelItems_CREATED: 'Created',
      labelItems_TO_CONFIRM: 'To Confirm',
      labelItems_PROCESSED: 'Processed'
    },
    RequestRecordTable: {
      columns_WORK_ORDER_NUMBER: 'Work Order Number',
      columns_CAPTION: 'Caption',
      columns_ENTRY: 'Classification',
      columns_STATE: 'State',
      columns_CURRENT_PROCESSOR: 'Current Processor'
    },
    EventRecordTable: {
      columns_WORK_ORDER_NUMBER: 'Work Order Number',
      columns_CAPTION: 'Caption',
      columns_ENTRY: 'Incident Source',
      columns_STATE: 'State',
      columns_CURRENT_PROCESSOR: 'Current Processor'
    },
    Announcement: {
      announcementHeader: 'Announcements',
      more: 'More',
      announcementNoDataMsg: 'You have no information for the moment',
      showMore: 'View More',
      AnnouncementModal: {
        title: 'List of Announcements',
        AnnouncementTable: {
          columns_ID: 'Announcement ID',
          columns_STATE: 'State',
          columns_CAPTION: 'Caption',
          showTotal: 'items'
        }
      },
      AnnouncementDetails: {
        title: 'Details of Announcement',
        files: 'Attachment',
        label_VIEW_TIMES: 'View Times',
        label_PUBLISH_TIME: 'Publish Time'
      }
    },
    SystemInforms: {
      systemInformsHeader: 'System Informs',
      more: 'More',
      systemInformsNoDataMsg: 'You have no information for the moment',
      showMore: 'View More'
    }
  },
  NewEvent: {
    title: 'Create Incident',
    NewEventForm: {
      done: 'File upload success',
      msg: 'File upload failed',
      msg_error: 'File upload size cannot exceed',
      columns_FILRNAME: 'Filename',
      columns_SIZE: 'Size',
      columns_UPLOADMAN: 'Upload Person',
      columns_UPLOADTIME: 'Upload Time',
      columns_ATTACHMENTTYPE: 'Attachment Type',
      columns_OPERATION: 'Operation',
      title_label: 'Title',
      title_message: 'Please input your title！',
      title_initialValue1: 'Self-service events from ',
      title_initialValue2: '',
      detail_label: 'Detail',
      detail_message: 'Please input your detail！',
      classification_label: 'Classification',
      classification_message: 'Please input your classification！',
      classification_placeholder: 'Please input your classification！',
      classification_notFoundContent: 'Not Found',
      occurrenceTime_label: 'Occurrence Time',
      occurrenceTime_placeholder: 'Please select the date',
      belongProject_label: 'Project',
      belongProject_placeholder: 'Please select your project！',
      belongProject_notFoundContent: 'Not Found',
      eventProperty_label: 'Event Property',
      eventProperty_placeholder: 'Please select your event property！',
      eventProperty_notFoundContent: 'Not Found',
      upload: 'Add attachments',
      button: 'Submit'
    }
  },
  NewRequest: {
    title: 'Create Request',
    NewRequestForm: {
      done: 'File upload success',
      msg: 'File upload failed',
      msg_error: 'File upload size cannot exceed',
      columns_FILRNAME: 'Filename',
      columns_SIZE: 'Size',
      columns_UPLOADMAN: 'Upload Person',
      columns_UPLOADTIME: 'Upload Time',
      columns_ATTACHMENTTYPE: 'Attachment Type',
      title_label: 'Title',
      title_message: 'Please input your title！',
      title_initialValue1: 'Self-service requests from ',
      title_initialValue2: '',
      detail_label: 'Detail',
      detail_message: 'Please input your detail！',
      classification_label: 'Classification',
      classification_message: 'Please input your classification！',
      classification_placeholder: 'Please input your classification！',
      classification_notFoundContent: 'Not Found',
      occurrenceTime_label: 'Expected Completion Time',
      occurrenceTime_message: 'Please input your expected completion time！',
      occurrenceTime_placeholder: 'Please select the date',
      upload: 'Add attachments',
      button: 'Submit'
    }
  },
  QueryEvent: {
    title: 'Query Incident',
    QueryEventForm: {
      luceneKey_label: 'Key Words',
      luceneKey_placeholder: 'Please enter the keywords for the query',
      button: 'Query'
    },
    QueryEventTable: {
      columns_WORK_ORDER_NUMBER: 'Work Order Number',
      columns_STATE: 'State',
      columns_CREATION_TIME: 'Creation Time',
      columns_CAPTION: 'Caption',
      columns_ENTRY: 'Classification',
      columns_ACCEPT_GROUP: 'Accept Group',
      columns_ACCEPTOR: 'Acceptor',
      columns_PRIORITY: 'Priority',
      columns_REQUESTER: 'Requester',
      columns_CREATOR: 'Creator',
      columns_CLOSE_CODE: 'Close Code',
      showTotal: 'items',
      pagination_goTo: 'Goto',
      pagination_page: ''
    }
  },
  QueryRequest: {
    title: 'Query Request',
    QueryRequestForm: {
      luceneKey_label: 'Key Words',
      luceneKey_placeholder: 'Please enter the keywords for the query',
      button: 'Query'
    },
    QueryEventTable: {
      columns_WORK_ORDER_NUMBER: 'Work Order Number',
      columns_CAPTION: 'Caption',
      columns_CLASSIFICATION: 'Classification',
      columns_STATE: 'State',
      columns_REQUESTER: 'Requester',
      columns_CREATION_TIME: 'Creation Time',
      columns_EXCEPTED_COMPLETION_TIME: 'Excepted Completion Time',
      columns_CURRENT_PROCESSOR: 'Current Processor',
      showTotal: 'items',
      pagination_goTo: 'Goto',
      pagination_page: ''
    }
  },
  QueryKnowledge: {
    title: 'Retrieval Knowledge',
    Tooltip_title: 'All Classifications',
    label: 'Key Words',
    myInput_placeholder: 'Search by keywords, such as "documentation and user manual"',
    submitButton: 'Retrieval',
    QueryKnowledgeTable: {
      columns_KNOWLEDGE_PROPERTY: 'Knowledge Property',
      columns_KNOWLEDGE_CAPTION: 'Knowledge Caption',
      columns_BROWSE_THROUGH: 'Browse/time',
      columns_CITE: 'Cite/time',
      columns_AUTHOR: 'Author',
      columns_LAST_UPDATE: 'Last Update',
      showTotal: 'items'
    }
  },
  EventDetails: {
    titleGoBack: 'Go Back',
    contentHeaderMsg_WORK_ORDER_NUMBER: 'Work Order Number',
    contentHeaderMsg_REQUESTER: 'Requester',
    contentHeaderMsg_CREATE_TIME: 'Creation Time',
    contentHeaderMsg_CURRENT_PROCESSOR: 'Current Processor',
    contentHeaderMsg_STATE: 'State',
    tabPane_title_DETAILED_INFORMATION: 'Detailed Information',
    tabPane_content_CAPTION: 'Caption',
    tabPane_content_DETAILS: 'Details',
    tabPane_content_ENTERPRISE_NAME: 'Enterprise Name',
    tabPane_content_WAIT_CODE: 'Wait Code',
    tabPane_content_CLASSIFICATION: 'Classification',
    tabPane_content_EVENT_SOURCE: 'Event Source',
    tabPane_content_EVENT_PROPERTY: 'Event Property',
    tabPane_content_PRIORITY_LEVEL: 'Priority Level',
    tabPane_content_EMERGENCY_DEGREE: 'Emergency Degree',
    tabPane_content_INFLUENCE_DEGREE: 'Influence Degree',
    tabPane_content_WHETHER_TO_VIOLATE_THE_SLA: 'Whether to Violate the SLA',
    tabPane_content_ACCEPT_GROUP: 'Accept Group/person',
    tabPane_content_CLOSE_CODE: 'Close Code',
    tabPane_content_SATISFACTION_DEGREE: 'Satisfaction Degree',
    tabPane_content_NO_EVALUATION: 'No Evaluation',
    tabPane_content_PROJECT: 'Subordinate to the Project',
    tabPane_content_TARGET_TIME: 'Target Time',
    tabPane_title_SOLUTIONS: 'Solutions',
    tabPane_content_DESCRIPTION: 'Description',
    tabPane_content_CAUSE_CODE: 'Cause Code',
    tabPane_title_ATTACHMENT: 'Attachment',
    SolutionAttachmentTable: {
      columns_FILENAME: 'Filename',
      columns_SIZE: 'Size',
      columns_UPLOADER: 'Uploader',
      columns_UPLOADTIME: 'Upload Time',
      columns_ATTACHMENTTYPE: 'Attachment Type',
      columns_OPERATION: 'Operation',
      title: 'Attachment Details：'
    },
    EventAttachmentTable: {
      columns_FILENAME: 'Filename',
      columns_SIZE: 'Size',
      columns_UPLOADER: 'Uploader',
      columns_UPLOADTIME: 'Upload Time',
      columns_ATTACHMENTTYPE: 'Attachment Type',
      columns_OPERATION: 'Operation',
      title: 'Attachment Details：'
    }
  },
  RequestDetails: {
    titleGoBack: 'Go Back',
    contentHeaderMsg_WORK_ORDER_NUMBER: 'Work Order Number',
    contentHeaderMsg_REQUESTER: 'Requester',
    contentHeaderMsg_CREATE_TIME: 'Creation Time',
    contentHeaderMsg_CURRENT_PROCESSOR: 'Current Processor',
    contentHeaderMsg_STATE: 'State',
    tabPane_title_DETAILED_INFORMATION: 'Detailed Information',
    tabPane_content_CAPTION: 'Caption',
    tabPane_content_DETAILS: 'Details',
    tabPane_content_CLASSIFICATION: 'Classification',
    tabPane_content_PRIORITY_LEVEL: 'Priority Level',
    tabPane_content_EMERGENCY_DEGREE: 'Emergency Degree',
    tabPane_content_INFLUENCE_DEGREE: 'Influence Degree',
    tabPane_content_EXPECTED_COMPLETION_TIME: 'Expected Completion Time',
    tabPane_content_CLOSE_TIME: 'Close Time',
    tabPane_content_CLOSE_CODE: 'Close Code',
    tabPane_content_SATISFACTION_DEGREE: 'Satisfaction Degree',
    tabPane_content_NO_EVALUATION: 'No Evaluation',
    tabPane_title_ATTACHMENT: 'Attachment',
    RequestAttachmentTable: {
      columns_FILENAME: 'Filename',
      columns_SIZE: 'Size',
      columns_UPLOADER: 'Uploader',
      columns_UPLOADTIME: 'Upload Time',
      columns_ATTACHMENTTYPE: 'Attachment Type',
      columns_OPERATION: 'Operation',
      title: 'Attachment Details：'
    }
  },
  KnowledgeDetails: {
    titleGoBack: 'Go Back',
    contentHeaderMsg_SUBMIT_TIME: 'Submit Time',
    contentHeaderMsg_SUBMITTER: 'Submitter',
    contentHeaderMsg_BROWSE_THROUGH: 'Browse',
    contentHeaderMsg_CITE: 'Cite',
    titleChildren_KNOWLEDGE_PROPERTY: 'Knowledge Property',
    titleChildren_KNOWLEDGE_CLASSIFICATION: 'Knowledge Classification',
    titleChildren_RELATED_ENVIRONMENT: 'Related Environment',
    titleChildren_KEY_WORDS: 'Key Words',
    tabPane: 'Detailed Information',
    tabItemTitle: 'Caption：',
    tabItemContentItemLabel_SOLUTIONS: 'Solutions：',
    tabItemContentItemLabel_ATTACHMENT: 'Attachment：',
    tabItemContentItemLabel_KNOWLEDGE_EVALUATION: 'Knowledge Evaluation：',
    knowledgeEvaluate_USER: 'User',
    knowledgeEvaluate_TIME: 'Time',
    knowledgeEvaluate_SCORE: 'Score',
    knowledgeEvaluate_CONTENT: 'Content'
  }
};

//# sourceMappingURL=english-compiled.js.map