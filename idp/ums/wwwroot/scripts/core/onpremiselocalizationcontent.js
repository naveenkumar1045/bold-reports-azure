﻿var TM = {
    App: {
        LocalizationContent: {
            //Words present in more files
            Copied: "[[[Copied]]]",
            CopyToClipboard: "[[[Copy to clipboard]]]",
            ClickToCopy: "[[[Click to copy]]]",
            PasswordMismatch: "[[[Password mismatch]]]",
            AvoidSpecailCharacters: "[[[Please avoid special characters]]]",
            EnterPassword: "[[[Please enter the password]]]",
            PasswordRule1: "[[[Password must meet the following requirements. It must contain,]]]",
            PasswordRule2: "[[[at least 6 characters]]]",
            PasswordRule3: "[[[1 uppercase]]]",
            PasswordRule4: "[[[1 lowercase]]]",
            PasswordRule5: "[[[1 numeric]]]",
            PasswordRule6: "[[[1 special character]]]",
            UserNameValidator: "[[[Please enter username.]]]",
            PasswordValidator: "[[[Please enter password.]]]",
            BrowsePath: "[[[Browse file path]]]",

            //Authentication Settings
            SSOSettings: "[[[SSO Settings]]]",
            SSOSettingsUpdated: "[[[SSO settings have been updated.]]]",
            SSOSettingsUpdateError: "[[[Error while updating settings.]]]",
            Configuration: "[[[Configuration]]]",
            ConfigurationUpdated: "[[[Configuration have been updated.]]]",
            ConfigurationUpdateError: "[[[Error while updating the configuration.]]]",
            WindowsAdSettings: "[[[Windows AD Settings]]]",
            WindowsAdSettingsUpdated: "[[[Windows AD settings have been updated.]]]",
            WindowsAdSettingsUpdateError: "[[[Error while updating settings.]]]",
            OpenIDConnectSettings: "[[[OpenID Connect Settings]]]",
            OpenIDUpdatedRestartText: "[[[OpenID Connect settings have been updated. The application will restart automatically in order to apply the changes.]]]</br></br>[[[Note: If the changes are not reflected, we recommend you to restart the application manually.]]]",
            AuthenticationSettings: "[[[Authentication Settings]]]",
            AuthSettingsUpdated: "[[[Authentication settings have been updated.]]]",
            AuthSettingsUpdatedError: "[[[An error occurred while updating authentication settings.]]]",
            AuthImageAllowedFormat: "[[[JPG and PNG image formats are supported.]]]",
            AuthImageAllowedSize: "[[[Image size should be less than 500 KB.]]]",
            SelectAuthProviderLogo: "[[[Please select the provider logo.]]]",
            InvalidFile: "[[[Invalid file]]]",
            RegenerateKey: "[[[Regenerate Signing Key]]]",
            RegenerateKeySuccess: "[[[Signing Key generated successfully.]]]",
            RegenerateKeyError: "[[[Error while generating signing key.]]]",

            //License Settings
            ManageLicense: "[[[Manage License]]]",
            LicenseUpdated: "[[[The license has been updated successfully.]]]",
            LicenseUpdateFailed: "[[[Failed to update the license.]]]",

            //SystemSettings.js
            TimeFormatTrue: "[[[13:00]]]",
            TimeFormatFalse: "[[[1:00 PM]]]",
            InValidFileFormat: "[[[Invalid file format]]]",
            SiteSettings: "[[[Site Settings]]]",
            EmailSettings: "[[[Email Settings]]]",
            SiteSettingsUpdated: "[[[Settings has been updated successfully]]]",
            SiteSettingsUpdateFalied: "[[[Error while updating settings.]]]",
            ADSettings: "[[[Active Directory Settings]]]",
            IsValidUrl: "[[[Please enter valid URL]]]",
            IsValidEndpoint: "[[[Please enter valid blob service endpoint]]]",
            EnterName: "[[[Please enter the name.]]]",
            InvalidEmailAddress: "[[[Invalid email address]]]",
            Urlvalidator: "[[[Please enter URL]]]",
            AzureADSettings: "[[[Azure Active Directory Settings]]]",
            PasswordPlaceholder: "[[[Password]]]",
            CopyRightValidator: "[[[Please enter the copy right information text]]]",
            MySqlPortInfo: "[[[Specify the TCP port number that the server is listening for connections. The default port number is 3306.]]]",
            postgresPortInfo: "[[[Specify the TCP port number that the server is listening for connections. The default port number is 5432.]]]",

            //Offlinelicenupdate.js
            InvalidLicFileFormat: "[[[Invalid file type. Please select .lic format only]]]",
            LicenseFileCorrupt: "[[[License file is corrupted. Please get the new license file from]]]",

            //Email Settings
            SenderEmailValidator: "[[[Please enter sender email address]]]",
            SenderNameValidator: "[[[Please enter sender name]]]",
            MailSMTPServerValidator: "[[[Please enter SMTP server]]]",
            MailSMTPPortValidator: "[[[Please enter SMTP port]]]",

            //UserSettings.js
            UserSettings: "[[[User Settings]]]",
            ActivationMode: "[[[Activation emails cannot be sent until the email settings are configured. You can select 'Automatic Activation' to activate the user without configuring email settings.]]]",

            //serverApp.js
            UnknownError: "[[[An unknown error occurred.]]]",

            //Server.Core.js
            UserNameHasWhiteSpace: "[[[Username should not contain white space]]]",
            UserNameSpecialCharacterValicator: "[[[Username should not contain special characters]]]",
            Valid: "[[[valid]]]",
            YesButton: "[[[Yes]]]",
            NoButton: "[[[No]]]",
            OKButton: "[[[OK]]]",
            DeleteAvatar: "[[[Delete profile picture]]]",
            DeleteAvatarSuccess: "[[[Profile picture has been deleted successfully.]]]",
            DeleteAvatarTitle: "[[[Delete Avatar]]]",
            DeleteAvatarError: "[[[Error in deleting profile picture.]]]",
            NoRecords: "[[[No records to display]]]",
            SearchKeyStart: "[[[StartsWith]]]",
            SearchKeyEnd: "[[[EndsWith]]]",
            SearchKeyContanins: "[[[Contains]]]",
            SearchKeyEqual: "[[[Equal]]]",
            SearchKeyNotEqual: "[[[NotEqual]]]",
            SearchValue: "[[[Filter Value]]]",
            Search: "[[[Filter]]]",
            ClearSearch: "[[[Clear]]]",
            PageCount: "[[[{0} of {1} pages ({2} items)]]]",
            FirstPage: "[[[Go to first page]]]",
            LastPage: "[[[Go to last page]]]",
            NextPage: "[[[Go to next page]]]",
            PreviousPage: "[[[Go to previous page]]]",
            BoldLicenseExpired: "[[[Your Embedded BI and Enterprise Reporting license has expired.]]]",
            BoldBiLicenseExpired: "[[[Your Embedded BI license has expired.]]]",
            BoldReportsLicenseExpired: "[[[Your Enterprise Reporting license has expired.]]]",
            UpgardePlanOr: "[[[Please upgrade your plan or]]]",
            Please: "[[[Please]]]",
            ContactUs: "[[[contact us]]]",
            UpgradeYourplan: "[[[upgrade your plan]]]",
            Or: "[[[or]]]",

            //Changepassword.js
            OldPasswordValidator: "[[[Please enter your old password]]]",
            NewPasswordValidator: "[[[Please enter your new password]]]",
            ConfirmPasswordValidator: "[[[Please confirm your new password]]]",
            UpdatePassword: "[[[Update Password]]]",
            PasswordSuccess: "[[[Password has been updated successfully.]]]",
            PasswordFailure: "[[[Failed to update the Password, try again later.]]]",

            //RegisterTenant.js
            StartCreatingReports: "[[[Start Creating Reports]]]",
            StartCreatingDashboards: "[[[Start Creating Dashboards]]]",

            //CheckMailSettings.js
            ActivateUser: "[[[Activate User]]]",

            OneOrMoreErrors: "[[[One or more errors occured.]]]",
            Click: "[[[Click]]]",
            Here: "[[[here]]]",
            KnowMore: "[[[to know more]]]",

            //SysetmSettings.js
            SelectDatabase: "[[[Select a database]]]",
            SiteValidation: "[[[Site name is too long. Must be fewer than 255 characters.]]]",
            YoureAnAdmin: "[[[Step 2: You’re an administrator]]]",
            YoureAnAdmin2: "[[[Step 3: You’re an administrator]]]",
            AdminHaveControl: "[[[Administrators have complete control over the application.]]]",
            YourStorage: "[[[Step 2: Your storage type]]]",
            YourStorage2: "[[[Step 6: Your storage type]]]",
            YourStorage3: "[[[Step 5: Your storage type]]]",
            YourBIDatabase: "[[[Step 4: Bold BI Database server configuration]]]",
            YourBIDatabase2: "[[[Step 5: Bold BI Database server configuration]]]",
            YourDatabase: "[[[Step 4: Bold Reports Database server configuration]]]",
            YourDatabase2: "[[[Step 5: Bold Reports Database server configuration]]]",
            StorageMsg: "[[[The storage type is used to maintain your Bold ID resources.]]]",
            StorageBIMsg: "[[[The storage type is used to maintain your Bold BI resources.]]]",
            StorageReportsMsg: "[[[The storage type is used to maintain your Bold Reports resources.]]]",
            StorageAccount: "[[[Please enter storage account name]]]",
            EndPoint: "[[[Please enter blob service endpoint]]]",
            AccessKey: "[[[Please enter access key]]]",
            ContainerName: "[[[Please enter container name]]]",
            IsValidCustomEndPoint: "[[[Invalid custom end point]]]",
            BlobUrl: "[[[Please enter blob URL]]]",
            IsValidBlobUrl: "[[[Please enter valid blob URL]]]",
            IsValidCustomBlobUrl: "[[[Subdomain name should match with the account name]]]",
            DatabaseCreation: "[[[Database Creation]]]",
            HasSpace: "[[[Username contains space.]]]",
            UsernameInvalidChar: "[[[Username contains invalid characters.]]]",
            EnterValidEmail: "[[[Please enter a valid email address.]]]",
            AvoidNumberSpace: "[[[Please avoid special characters, numbers and white spaces.]]]",
            AvoidLeadingTrailingSpace: "[[[and leading and trailing spaces.]]]",
            AvoidLeadingSpace: "[[[leading spaces.]]]",
            MySqlAvoidLeadingTrailingSpace: "[[[leading and trailing spaces.]]]",
            OracleAvoidLeadingTrailingSpace: "[[[leading and trailing spaces.]]]",
            PostgresqlAvoidLeadingTrailingSpace: "[[[and leading spaces and trailing spaces.]]]",
            FirstNameValidator: "[[[Please enter first name.]]]",
            ServerNamevalidator: "[[[Please enter server name.]]]",
            DatabaseValidator: "[[[Please enter database name.]]]",
            PortValidator: "[[[Please enter Port number.]]]",
            InvalidPassword: "[[[Invalid password]]]",
            ConfirmPasswordValidator: "[[[Please confirm password]]]",
            PasswordsMismatch: "[[[Passwords mismatch]]]",
            TheDatabaseValidator: "[[[Please enter the database name.]]]",
            ExistingDatabaseValidator: "[[[Please enter the existing database name.]]]",
            DatabaseError: "[[[Database Error]]]",
            TablesAlreadyExists: "[[[The below table(s) already exists in the selected database.]]]",
            Creation: "[[[Creation]]]",
            IsValidPort: "[[[Please enter valid port number.]]]",
            EmailValidator: "[[[Please enter email address.]]]",
            DatabasePasswordValidator: "[[[Please enter the database password]]]",
            NodatabaseTitle: "[[[no database found]]]",
            NoDatabase: "[[[No database found]]]",
            DatabaseType: "[[[Please select a database]]]",
            NoDsn: "[[[No DSN found]]]",
            DataStoreConfig: "[[[Step 6: Data Store Configuration]]]",
            DataStoreConfigforBoldbi: "[[[Step 7: Data Store Configuration]]]",
            PullYourData: "[[[Pull your data from]]]",
            DataConnectorsSaveOffline: "[[[data connectors and save it offline to access your dashboard quickly.]]]",
            DatabaseMsg: "[[[This is where we store your dashboards, users, and their access permissions.]]]",
            DatabaseReportsMsg: "[[[This is where we store your reports, users, and their access permissions.]]]",

            //AddTenant.js
            BoldReportsMultiTenancy: "[[[Using a multitenant solution, you can host multiple Enterprise Reporting sites on a single instance by isolating the database and resources for each site.]]]",
            BoldBiMultiTenancy: "[[[Using a multitenant solution, you can host multiple Embedded BI sites on a single instance by isolating the database and resources for each site.]]]",
            SiteIdentifierValidator: "[[[Please enter site identifier.]]]",
            SiteNameValidator: "[[[Please enter site name.]]]",
            SelectSiteAdmin: "[[[Select Site Administrator]]]",
            AdminControlSite: "[[[Administrators have complete control over the site.]]]",
            SelectDatabaseTitle: "[[[Select Database]]]",
            PlaceToCreateShare: "[[[The place where you will create and share your]]]",
            AddTenant: "[[[Select Storage]]]",
            DashboardsDot: "[[[dashboards.]]]",
            ReportsDot: "[[[reports.]]]",
            ConfigureDataStore: "[[[Configure Data Store]]]",
            Name: "[[[Name]]]",
            UpdateSite: "[[[Update Site]]]",
            SiteUpdated: "[[[Site has been updated successfully.]]]",
            SiteUpdateFailed: "[[[Site Updation Failed]]]",
            SiteNameExists: "[[[This site name already exists]]]",
            NextButton: "[[[Next]]]",
            CreateLaunchSite: "[[[Create and launch site]]]",
            UpdateButton: "[[[Update]]]",
            SiteCreation: "[[[Site Creation]]]",
            SiteDataStore: "[[[SELECT DATA STORE]]]",
            SelectStorage: "[[[SELECT STORAGE]]]",
            DomainValidator: "[[[Please enter a valid domain]]]",
            TenantwithoutSiteIdentifier: "[[[You cannot configure this site without site identifier]]]",
            InvalidDomain: "[[[We are unable to connect to the given domain.]]]",
            DisAllowTenantIdentifier: "[[[Site identifier is not allowed, since it is restricted in global configuration.]]]",
            BoldBIDataSecurityNote: "[[[You can configure the isolation code and attribute for this site later.]]]",
            BoldReportsDataSecurityNote: "[[[You can configure attribute for this site later.]]]",

            //ViewSite.js
            AddAdministrators: "[[[Add Administrators]]]",
            RemoveAdministrator: "[[[Remove Administartor]]]",
            GrantSiteAccess: "[[[Grant Site Access]]]",
            GrantSiteAccessError: "[[[An error occurred while granting access to users.]]]",
            GrantedAccessTo: "[[[Granted access to]]]",
            UsersSuccessfully: "[[[user(s) successfully.]]]",
            RevokedAccessFor: "[[[Revoked access for]]]",
            RevokeSiteAccess: "[[[Revoke Site Access]]]",
            RevokeSiteAccessError: "[[[An error occurred while revoking access for users.]]]",
            RegenerateClientSecret: "[[[Regenerate Client Secret]]]",
            RegenerateClientSecretSuccess: "[[[Client secret generated successfully.]]]",
            RegenerateClientSecretFail: "[[[Error while generating client secret.]]]",
            WarningColon: "[[[Warning:]]]",
            DeleteAllResource: "[[[This will delete all the resource and database linked to this site, and this action cannot be undone.]]]",
            Activate: "[[[Activate]]]",
            Suspend: "[[[Suspend]]]",
            Delete: "[[[Delete]]]",
            SiteLetter: "[[[site]]]",
            InternalServerErrorTryAgain: "[[[Internal server error. Please try again]]]",
            SiteSuspendSuccess: "[[[Site has been suspended successfully.]]]",
            SiteDeleteSuccess: "[[[Site has been deleted successfully.]]]",
            SiteActivatedSuccess: "[[[Site has been activated successfully.]]]",
            IsolationCode: "[[[Isolation Code]]]",
            IsolationCodeSucess: "[[[Isolation code has been updated successfully.]]]",
            IsolationCodeError: "[[[An error occurred while updating isolation code.]]]",
            IsolationCodeValidator: "[[[Please enter a valid isolation code.]]]",

            //UserDelete.js
            DeleteUser: "[[[Delete User]]]",

            //UserManagement.js
            AddUser: "[[[Add User]]]",
            ImportFromCSV: "[[[Import users from CSV]]]",
            NoDataInUploadedFile: "[[[There is no data in the uploaded file. Please check and try uploading again.]]]",
            UsernameExists: "[[[Username already exists]]]",
            EmailAddressExists: "[[[Email address already exists]]]",
            UsernameExceeds: "[[[Username should be between 3 to 254 characters.]]]",
            InvalidUsername: "[[[Username can contain letters, numbers, hyphen, underscore and period.]]]",
            UserAddedActivated: "[[[User has been added and activated successfully]]]",
            UserAdded: "[[[User has been added successfully.]]]",
            UserActivationEmailCannotSent: "[[[User has been created successfully. Activation emails cannot be sent until the user’s email settings are configured.]]]",
            GroupExists: "[[[Group already exists with this name]]]",
            GroupNameValidator: "[[[Please enter group name]]]",
            DeleteUsers: "[[[Delete User(s)]]]",
            UsersDeleted: "[[[User(s) has been deleted successfully]]]",
            UsersDeleteFailed: "[[[Failed to delete user(s), please try again later.]]]",
            ToSendAccountActivation: "[[[To send account activation email to the user, please configure email settings or change the account activation mode as Automatic Activation.]]]",
            UserImportIncomplete: "[[[User import incomplete.Do you want to continue?]]]",
            DuplicateOrInvalidData: "[[[Duplicate or Invalid data is found. Please change the data accordingly and re-upload the file.]]]",
            UsersHasAdded: "[[[user(s) has been added successfully]]]",
            UsersHasAddedActivated: "[[[user(s) has been added and activated successfully.]]]",
            FailedToDeleteUser: "[[[Failed to delete user, please try again later.]]]",
            UserHasDeleted: "[[[User has been deleted successfully.]]]",
            CsvFileValidator: "[[[Please upload a valid csv file.]]]",
            MakeAdmin: "[[[Admin access has been given to the selected user(s) successfully.]]]",
            RemoveAdmin: "[[[Admin access has been removed from the selected users successfully.]]]",
            AssignRole: "[[[Assign Role]]]",
            RemoveRole: "[[[Remove Role]]]",
            MakeAdminError: "[[[An error occured while giving admin access]]]",
            RemoveAdminError: "[[[An error occured while removing admin access]]]",

            //UserManagementProfile.js
            PhoneNumberValidator: "[[[Please enter the valid phone number]]]",
            UserAccountHasActivated: "[[[User account has been activated successfully.]]]",
            ActivationCodeGenerated: "[[[Activation code has been generated successfully. As email settings are not configured we are not able to send activation email to the user.]]]",
            ConfigureEmailSettings: "[[[Please click here to configure the email settings.]]]",
            ActivationCodeSent: "[[[Activation code has been sent successfully.]]]",
            ActivationCodeResent: "[[[Activation code has been resent successfully.]]]",
            ChangeProfilepicture: "[[[Change Profile picture]]]",
            ProfilePictureSaved: "[[[Profile picture has been saved successfully.]]]",
            ProfilePictureSaveFailed: "[[[Failed to update the Profile picture, try again later.]]]",
            DeleteProfilePicture: "[[[Delete Profile Picture]]]",
            DeleteProfilePictureConfirm: "[[[Are you sure you want to delete the profile picture?]]]",
            BrowseImagePath: "[[[browse image path]]]",
            NoFileSelected: "[[[No file selected.]]]",

            //UserNotificationSettings.js
            NotificationSettings: "[[[Update Notification Settings]]]",
            NotificationSettingsUpdated: "[[[Notification settings has been updated successfully.]]]",
            NotificationSettingsUpdateFailed: "[[[Error while updating notification settings.]]]",

            //CustomAttributes
            AttributeNameValidator: "[[[Please enter the attribute name.]]]",
            AttributeValueValidator: "[[[Please enter the attribute value.]]]",
            AddCustomAttribute: "[[[Add Attribute]]]",
            EditCustomAttribute: "[[[Edit Attribute]]]",
            CustomAttributeSuccess: "[[[Attribute has been added successfully.]]]",
            CustomAttributeFailure: "[[[Failed to add attribute.]]]",
            IsAttributeNameExist: "[[[Attribute name already exists.]]]",
            UpdateCustomAttributeSuccess: "[[[Attribute has been updated successfully.]]]",
            UpdateCustomAttributeFailure: "[[[Failed to update attribute.]]]",
            DeleteCustomAttributeSuccess: "[[[Attribute has been deleted successfully.]]]",
            DeleteCustomAttributeFailure: "[[[Failed to delete attribute.]]]",
            SaveButton: "[[[Save]]]",
            CancelButton: "[[[Cancel]]]",
            DeleteCustomAttribute: "[[[Delete Attribute]]]",
            DeleteAttributeConfirm: "[[[Are you sure you want to delete the attribute - ]]]",

            //Embed Settings
            ResetHeader: "[[[Reset Secret]]]",
            ResetConfirmationMessage: "[[[Resetting the secret will break any embed dashboards using the old secret. Are you sure you want to reset the secret?]]]",
            EmbedSettings: "[[[Embed Settings]]]",
            ResetSecretSuccessAlert: "[[[Embed Secret has been updated successfully]]]",
            EmbedInvalidMessage: "[[[The embed dashboard URL must be used in an iframe.]]]",

            //Popover Content
            biStorePopoverContent: "[[[This database is to store data pulled from files and web data sources to visualize them in dashboards.]]]",
            reportStorePopoverContent: "[[[This database is to store data pulled from files and web data sources to visualize them in reports.]]]",
            biServerPopoverContent: "[[[This database is to store metadata such as dashboards, users, and their permissions.]]]",
            reportServerPopoverContent: "[[[This database is to store metadata such as reports, users, and their permissions.]]]",

            //Api keys
            ClicktoView: "[[[Click to view]]]",
            ClicktoHide: "[[[Click to hide]]]",

            //upload-font
            UploadFont: "[[[Upload Font]]]",
            BrowseFont: "[[[Browse file path (.woff2)]]]",
            FontSettings: "[[[Font Settings]]]"
        }
    }
};