import React, { isValidElement } from 'react';

import Divider from '@components/ui/Divider';

import resources from '@fixtures/data/resources';

import styles from './styles.module.css';

const Resources = () => (
  <section id="resources" className={styles.container}>
    <div className="main-container">
      <h2 className={styles.title}>Alguns de nossos recursos</h2>

      <Divider margin="20px" />

      <div className={styles.resources}>
        {resources.map(({ key, title, image, element, description }) => (
          <div key={key} className={styles.resource}>
            {element ?? <img src={image} alt="Resource" />}

            <div style={{ maxWidth: '450px' }}>
              {isValidElement(title) ? (
                title
              ) : (
                <h3 className="underline">{title}</h3>
              )}

              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Resources;
