const TermsAndConditionsPage: React.FC = () => {
  return (
    <main id='main'>
      <div className='ssh-container px-[30px] pt-6 xsm:pt-8 pb-16 sm:pb-24 md:pb-32'>
        <div className='ssh-row'>
          <section className='terms-and-conditions text-brown text-[20px] sm:text-[24px] leading-6 sm:leading-7 text-justify'>
            <div className='terms-and-conditions__title'>
              <h1 className='text-center sm:text-start mb-4 xsm:mb-5 text-[24px] xsm:text-[28px] sm:text-[32px]'>
                Terms and Conditions
              </h1>
            </div>
            <div className='terms-and-conditions__intro mb-5'>
              <p>
                Welcome to DaSSH ecommerce website (the {'"Site"'}). These Terms
                and Conditions govern your use of the Site, so please read them
                carefully before using the Site.
              </p>
            </div>
            <div className='terms-and-conditions__rules'>
              <ul className='list-disc'>
                <li className='list-item list-disc mb-5'>
                  <span className='font-normal'>Acceptance of Terms</span>
                  <p>
                    By using the Site, you agree to these Terms and Conditions,
                    as well as any additional terms and conditions that we may
                    provide to you from time to time.
                  </p>
                </li>
                <li className='list-item list-disc mb-5'>
                  <span className='font-normal'>Use of the Site</span>
                  <p>
                    You may use the Site for your personal, non-commercial use
                    only. You may not use the Site for any illegal or
                    unauthorized purpose, and you may not interfere with the
                    proper functioning of the Site. We reserve the right to
                    modify, suspend, or discontinue the Site at any time without
                    notice.
                  </p>
                </li>
                <li className='list-item list-disc mb-5'>
                  <span className='font-normal'>Product Information</span>
                  <p>
                    We make every effort to accurately describe our products on
                    the Site, but we do not guarantee that the information on
                    the Site is complete or error-free. We reserve the right to
                    modify the prices, descriptions, and availability of our
                    products at any time without notice.
                  </p>
                </li>
                <li className='list-item list-disc mb-5'>
                  <span className='font-normal'>Orders and Payments</span>
                  <p>
                    When you place an order on the Site, you agree to pay the
                    full price of the products you have ordered, as well as any
                    applicable taxes and shipping fees. We reserve the right to
                    refuse or cancel any order for any reason, and we may
                    require additional verification or information before
                    accepting your order.
                  </p>
                </li>
                <li className='list-item list-disc mb-5'>
                  <span className='font-normal'>Shipping and Returns</span>
                  <p>
                    We will ship your order to the address you provide during
                    checkout, and we will make every effort to deliver your
                    order within the estimated timeframe. However, we are not
                    responsible for any delays or errors in shipping that are
                    beyond our control. If you need to return a product, please
                    see our Return Policy on the Site for instructions.
                  </p>
                </li>
                <li className='list-item list-disc mb-5'>
                  <span className='font-normal'>Intellectual Property</span>
                  <p>
                    The content on the Site, including text, graphics, logos,
                    images, and software, is the property of DaSSH and is
                    protected by copyright and other intellectual property laws.
                    You may not copy, reproduce, distribute, or display any
                    content on the Site without our prior written consent.
                  </p>
                </li>
                <li className='list-item list-disc mb-5'>
                  <span className='font-normal'>Limitation of Liability</span>
                  <p>
                    We are not liable for any direct, indirect, incidental,
                    special, or consequential damages that result from your use
                    of the Site or from your purchase of our products. Our
                    liability to you for any claim arising out of or in
                    connection with these Terms and Conditions or the Site will
                    not exceed the total amount paid by you for the products you
                    have purchased.
                  </p>
                </li>
                <li className='list-item list-disc mb-5'>
                  <span className='font-normal'>Indemnification</span>
                  <p>
                    You agree to indemnify and hold harmless DaSSH and its
                    affiliates, directors, officers, employees, and agents from
                    any claim, demand, or damage, including reasonable attorneys
                    fees, arising out of your use of the Site or your violation
                    of these Terms and Conditions.
                  </p>
                </li>
                <li className='list-item list-disc mb-5'>
                  <span className='font-normal'>Governing Law</span>
                  <p>
                    These Terms and Conditions are governed by and construed in
                    accordance with the laws of [Your Jurisdiction]. Any dispute
                    arising out of or in connection with these Terms and
                    Conditions will be subject to the exclusive jurisdiction of
                    the courts of [Your Jurisdiction].
                  </p>
                </li>
                <li className='list-item list-disc'>
                  <span className='font-normal'>
                    Changes to these Terms and Conditions
                  </span>
                  <p>
                    We may update these Terms and Conditions from time to time
                    to reflect changes in our practices or to comply with legal
                    requirements. We will notify you of any material changes to
                    these Terms and Conditions by posting a notice on the Site
                    or by sending you an email.
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

export default TermsAndConditionsPage;
