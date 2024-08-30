import './UserTermsAndAgreementsStyles.css';
import React, { useState, useEffect } from 'react';

export default function UserTermsAndAgreementsPage({ hasUserAgreed }){

    //Checks if user has consented to the user terms and agreements...
    // Create a state variable to track checkbox status
    const [setCheck, setIsChecked] = useState(false);


    const setCheckbox = (event) => {
        setIsChecked(event.target.checked);
    };

    useEffect(() => {
        hasUserAgreed(setCheck);
    },[setCheck]);


    return(
        <div className="userTermsAndAgreementsPage">

            {/* Main Container */}
            <div id="primaryContainer">
                {/* Main Title Container */}
                <div className="mainTitleContainer">
                    <p id="mainTitle">User Terms And Agreements</p>
                </div>

                {/* Main Content of User Terms And Agreements  */}
                <div className="mainBodyContainer">
                    <p id="mainContent">
                        1. Acceptance of Terms: <br /><br />
                        Welcome to Guinteract! These User Terms and Agreements govern your use of our social media platform and related services. By accessing or using our Service, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use our Service. Please carefully read through the contents in order to be adequately informed on what rights are reserved for you; the user of our service, and for the Platform. <br />
                        <br /><br />
                        2. Eligibility: <br /><br />
                        You must be at least 13 years old to use our Service, or have a guardian that meets the age requirement vicariously use the service for you. By using Guinteract, you represent and warrant that you meet this age requirement. <br />
                        <br /><br />
                        3. Account Registration: <br /><br />
                        You agree to provide accurate and complete information when creating your account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. <br />
                        <br /><br />
                        4. User Conduct: <br /><br />
                        You agree not to use the Service for any unlawful or prohibited activities. This includes, but is not limited to: <br />
                            <br />
                            ○ Posting or sharing content that is offensive, defamatory, or infringes on the rights of others.
                            <br /><br />
                            ○ Engaging in activities that could harm the Service or its users, including distributing malware or attempting to gain unauthorized access to our systems.
                            <br /><br />
                            ○ Using the Service to spam, harass, or impersonate others.
                            <br /><br />
                            ○ Posting Content Related to Guitars:
                            <br /><br /><br />
                            All content posted on Guinteract must be directly related to guitars, guitar playing, or the guitar community. This includes, but is not limited to:<br />
                            <br />
                            ○ Discussions about different types of guitars, guitar gear, and accessories.
                        <br /><br />
                            ○ Tutorials, tips, and techniques for playing the guitar.
                        <br /><br />
                            ○ Sharing of guitar-related news, events, and activities.
                        <br /><br />
                            ○ Reviews and recommendations of guitar-related products and services.
                        <br /><br />
                            ○ Personal experiences, stories, and achievements related to guitar playing.
                        <br /><br />
                            ○ Content that is not directly related to guitars or the guitar community, such as unrelated personal posts, non-guitar-related advertisements, or general interest topics, is strictly discouraged and prohibited.
                        <br /><br />
                            ○ We reserve the right to review, flag, and remove any content that we determine to be irrelevant to the guitar community. Users who repeatedly post irrelevant content may face penalties, including temporary or permanent suspension of their account.
                        <br /><br /><br />
                        5. Content Ownership and Rights:<br /><br />
                        You retain ownership of any content you create or share on Guinteract. By posting Your Content on our Service, you grant us a non-exclusive, royalty-free, worldwide license to use, reproduce, modify, distribute, and display your content in connection with the operation of the Service.
                        <br /><br /><br />
                        6. Privacy, Data Processing, and User Consent:<br /><br /><br /><br />
                        ● 6.1. Data Collection<br /><br /><br />
                            Types of Data Collected:<br /><br />
                            We may collect various types of data from you when you use our Service, including but not limited to:<br />
                            <br />
                                ○ Personal Information: Such as your name, email address, phone number, date of birth, and any other information you provide during account creation or through your interactions with our Service.
                            <br /><br />
                                ○ Usage Data: Information about how you use our Service, including IP address, browser type, operating system, pages visited, and other usage statistics.
                            <br /><br />
                                ○ Content Data: Data related to content you create, upload, or interact with on our Service, such as posts, comments, and messages.
                            <br /><br />
                                ○ Device Data: Information about the device you use to access our Service, including device ID, operating system version, and device type.
                            <br /><br /><br /><br />
                            ● 6.2. Data Use and Processing<br /><br /><br />
                            Purpose of Data Processing:<br /><br />
                            We may use the data we collect for various purposes, including but not limited to:<br />
                            <br />
                                ○ Service Provision: To provide, maintain, and improve our Service and deliver personalized content and advertisements.
                            <br /><br />
                                ○ Account Management: To manage your account, process transactions, and communicate with you about your account and our Service.
                            <br /><br />
                                ○ User Engagement: To interact with you, respond to your inquiries, and provide customer support.
                            <br /><br />
                                ○ Analytics: To analyze usage patterns, improve the functionality of our Service, and conduct research and development.
                            <br /><br />
                                ○ Legal Compliance: To comply with legal obligations, enforce our Terms, and protect the rights, property, and safety of Guinteract, our users, and others.
                            <br /><br />
                                ○ Data Sharing:<br /><br /><br />
                                We may share your data with:
                                <br /><br />
                                ○ Service Providers: Third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, and customer support.
                                <br /><br />
                                ○ Affiliates: Our affiliates and subsidiaries for the purposes described in this section.
                                <br /><br />
                                ○ Legal Authorities: To comply with legal obligations, respond to lawful requests and legal processes, and protect the rights, property, or safety of Guinteract, our users, or others.
                                <br /><br />
                                ○ Data Transfers:<br /><br />
                                Your data may be transferred to and processed in countries other than your own, including countries that may have different data protection laws. By using our Service, you consent to the transfer of your data to such countries.
                                <br /><br /><br /><br />
                                ● 6.3. User Consent and Rights<br /><br />
                            Consent to Data Processing:<br /><br /><br />
                            By using our Service, you consent to the collection, use, and processing of your data as described in these Terms and our Privacy Policy. You acknowledge that you have read and understood how we handle your data.
                            <br /><br />
                            Data Access and Control:<br /><br /><br />
                            You have the right to:
                            <br /><br />
                                ○ Access: Request access to the personal data we hold about you.
                            <br /><br />
                                ○ Correction: Request correction of inaccurate or incomplete personal data.
                            <br /><br />
                                ○ Deletion: Request deletion of your personal data, subject to certain legal exceptions.
                            <br /><br />
                                ○ Objection: Object to the processing of your personal data for certain purposes, such as direct marketing.
                            <br /><br />
                                ○ Restriction: Request restriction of processing in certain circumstances.
                            <br /><br />
                                ○ Data Portability: Request transfer of your personal data to another service provider, where applicable.
                            <br /><br /><br />
                                ○ How to Exercise Your Rights:<br /><br />
                                To exercise your rights or make inquiries regarding your data, please contact us at [contact email or address]. We will respond to your requests in accordance with applicable laws.
                                <br /><br /><br /><br />
                            ● 6.4. Data Security<br /><br />
                            Security Measures:<br /><br /><br />
                            We implement reasonable security measures to protect your data from unauthorized access, use, alteration, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
                            <br /><br />
                                ○ Breach Notification:<br /><br />
                                In the event of a data breach that affects your personal data, we will notify you and the relevant authorities in accordance with applicable laws.
                                <br /><br /><br /><br />
                            ● 6.5. Data Retention<br /><br />
                            Retention Period:<br /><br /><br />
                            We will retain your personal data for as long as necessary to fulfill the purposes outlined in these Terms and our Privacy Policy, unless a longer retention period is required or permitted by law.
                            <br /><br />
                                ○ Data Deletion:<br /><br />
                                Upon termination of your account or request for deletion, we will delete or anonymize your personal data in accordance with applicable laws and our data retention policy.
                                <br /><br /><br /><br />
                            ● 6.6. Changes to Data Processing Practices<br /><br /><br />
                            We may update our data processing practices from time to time. Any changes will be reflected in our Privacy Policy, and we may notify you of significant changes. Continued use of our Service after such changes constitutes your acceptance of the updated data processing practices.
                            <br /><br /><br />
                        7. Termination<br /><br />
                        We reserve the right to suspend or terminate your account at any time, with or without notice, if you violate these Terms or engage in any activity that we deem harmful to our Service or other users.
                        <br /><br /><br />
                        8. Disclaimer of Warranties<br /><br />
                        Our Service is provided "as is" and "as available," without any warranties of any kind, either express or implied. We do not warrant that the Service will be uninterrupted, error-free, or free of harmful components.
                        <br /><br /><br />
                        9. Limitation of Liability<br /><br />
                        To the fullest extent permitted by law, Guinteract and its affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from (a) your use of the Service; (b) any unauthorized access to or use of our servers and/or any personal information stored therein; (c) any interruption or cessation of transmission to or from our Service; (d) any bugs, viruses, trojan horses, or the like that may be transmitted to or through our Service by any third party; (e) any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the Service; and/or (f) the defamatory, offensive, or illegal conduct of any third party.
                        <br /><br /><br />
                        10. Governing Law<br /><br />
                        These Terms shall be governed by and construed in accordance with the laws of [Select a Jurisdiction], without regard to its conflict of law principles.
                        <br /><br /><br />
                        11. Changes to Terms<br /><br />
                        We may update these Terms from time to time. If we make material changes, we will notify you by posting the updated Terms on our Service or through other communications. Your continued use of the Service after such changes constitutes your acceptance of the updated Terms.
                        <br /><br /><br />
                        12. Contact Us<br /><br />
                        If you have any questions about these Terms, please contact us at guinteract@gmail.com<br /><br />
                    </p>
                    <hr style={{ margin: '0' }}/>
                </div>

                {/* Checkbox container */}
                <div className="checkboxContainer">
                    <input type="checkbox" id = "checkbox" checked={setCheck} onChange={setCheckbox}/>
                    <p id="label">I agree with the user terms and conditions</p>
                </div>
            </div>
        </div>
    );
}