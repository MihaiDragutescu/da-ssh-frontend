const PrivacyPolicyPage: React.FC = () => {
  return (
    <main id='main'>
      <div className='ssh-container px-[30px] pt-6 xsm:pt-8 pb-16 sm:pb-24 md:pb-32'>
        <div className='ssh-row'>
          <section className='privacy-policy text-brown text-[20px] sm:text-[24px] leading-6 sm:leading-7 text-justify'>
            <div className='privacy-policy__title'>
              <h1 className='text-center sm:text-start mb-4 xsm:mb-5 text-[24px] xsm:text-[28px] sm:text-[32px]'>
                Privacy Policy
              </h1>
            </div>
            <div className='privacy-policy__intro mb-5'>
              <p>
                This Privacy Policy describes how DaSSH ({'"we"'} or {'"us"'})
                collects, uses, and shares personal information when you use our
                ecommerce website (the {'"Site"'}). By using the Site, you agree
                to the collection and use of your personal information in
                accordance with this Privacy Policy.
              </p>
            </div>
            <div className='privacy-policy__rules'>
              <ul className='list-disc'>
                <li className='list-item list-disc mb-5'>
                  <span className='font-normal'>Information We Collect</span>
                  <p>
                    We collect personal information that you provide to us when
                    you use the Site, such as your name, email address, shipping
                    address, and payment information. We may also collect
                    information about your device, including your IP address and
                    browser type, and we may use cookies and similar
                    technologies to collect information about your browsing
                  </p>
                </li>
                <li className='list-item list-disc mb-5'>
                  <span className='font-normal'>
                    How We Use Your Information
                  </span>
                  <p>
                    We use your personal information to fulfill your orders,
                    process payments, and communicate with you about your
                    orders. We may also use your information to improve our
                    products and services, to personalize your experience on the
                    Site, and to send you marketing communications if you have
                    opted-in to receive them.
                  </p>
                </li>
                <li className='list-item list-disc mb-5'>
                  <span className='font-normal'>Sharing Your Information</span>
                  <p>
                    We may share your personal information with our service
                    providers who help us to process payments, ship orders, and
                    provide customer support. We may also share your information
                    with our marketing partners if you have opted-in to receive
                    marketing communications from them. We will not sell or rent
                    your personal information to third parties for their
                    marketing purposes.
                  </p>
                </li>
                <li className='list-item list-disc mb-5'>
                  <span className='font-normal'>Your Choices</span>
                  <p>
                    You can choose not to provide us with certain personal
                    information, but this may limit your ability to use certain
                    features of the Site. You can also opt-out of receiving
                    marketing communications from us or our marketing partners
                    at any time by following the instructions in the
                    communication.
                  </p>
                </li>
                <li className='list-item list-disc mb-5'>
                  <span className='font-normal'>Security</span>
                  <p>
                    We take reasonable measures to protect your personal
                    information from unauthorized access, use, or disclosure.
                    However, no method of transmission over the internet or
                    electronic storage is 100% secure, so we cannot guarantee
                    the absolute security of your information.
                  </p>
                </li>
                <li className='list-item list-disc mb-5'>
                  <span className='font-normal'>{"Children's Privacy"}</span>
                  <p>
                    The Site is not intended for use by children under the age
                    of 13, and we do not knowingly collect personal information
                    from children under the age of 13. If we learn that we have
                    collected personal information from a child under the age of
                    13, we will take steps to delete the information as soon as
                    possible.
                  </p>
                </li>
                <li className='list-item list-disc mb-5'>
                  <span className='font-normal'>
                    Changes to this Privacy Policy
                  </span>
                  <p>
                    We may update this Privacy Policy from time to time to
                    reflect changes in our practices or to comply with legal
                    requirements. We will notify you of any material changes to
                    this Privacy Policy by posting a notice on the Site or by
                    sending you an email.
                  </p>
                </li>
                <li className='list-item list-disc'>
                  <span className='font-normal'>Contact Us</span>
                  <p>
                    If you have any questions or concerns about this Privacy
                    Policy, please contact us at [Contact Information].
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
