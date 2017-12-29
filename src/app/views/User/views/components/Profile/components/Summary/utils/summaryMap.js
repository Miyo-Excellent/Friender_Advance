// Dependencies
import React from 'react';

// Assets
import aplicatedIMG from "../assets/img/007-check.svg";
import interestedIMG from "../assets/img/021-medical.svg";
import evaluatedIMG from "../assets/img/023-curriculum-1.svg";
import completedIMG from "../assets/img/015-car.svg";

export default function summaryMap(styles, user, isMobile) {
  const { profile } = user;
  return isMobile
    ? ( <div className={styles.info_mobile}>
      <div className={styles.Aplicated_mobile}>
        <div className={styles.image_mobile}>
          <img src={aplicatedIMG} alt={`Aplicaste a ${ profile.aplicated } ofertas`} />
        </div>
        <span> Aplicaste a <strong>{ profile.aplicated }</strong> ofertas </span>
      </div>
      <div className={styles.interested_mobile}>
        <div className={styles.image_mobile}>
          <img src={interestedIMG} alt={`Ha ${ profile.interested } personas les interesa tu perfil`} />
        </div>
        <span> Ha <strong>{ profile.interested }</strong> personas les interesa tu perfil</span>
      </div>
      <div className={styles.evaluated_mobile}>
        <div className={styles.image_mobile}>
          <img src={evaluatedIMG} alt={`${ profile.evaluated } empresas evaluann tu HV`} />
        </div>
        <span> <strong>{ profile.evaluated }</strong> empresas evaluan tu hoja de vida </span>
      </div>
      <div className={styles.completed_mobile}>
        <div className={styles.image_mobile}>
          <img src={completedIMG} alt={`Eres finalista en ${ profile.completed } procesos de selección`} />
        </div>
        <span> Eres finalista en <strong>{ profile.completed }</strong> procesos de selección </span>
      </div>
    </div>
    ) : ( <div className={styles.info}>
      <div className={styles.Aplicated}>
        <div className={styles.image}>
          <img src={aplicatedIMG} alt={`Aplicaste a ${ profile.aplicated } ofertas`} />
        </div>
        <span> Aplicaste a <strong>{ profile.aplicated }</strong> ofertas </span>
      </div>
      <div className={styles.interested}>
        <div className={styles.image}>
          <img src={interestedIMG} alt={`Ha ${ profile.interested } personas les interesa tu perfil`} />
        </div>
        <span> Ha <strong>{ profile.interested }</strong> personas les interesa tu perfil</span>
      </div>
      <div className={styles.evaluated}>
        <div className={styles.image}>
          <img src={evaluatedIMG} alt={`${ profile.evaluated } empresas evaluann tu HV`} />
        </div>
        <span> <strong>{ profile.evaluated }</strong> empresas evaluan tu hoja de vida </span>
      </div>
      <div className={styles.completed}>
        <div className={styles.image}>
          <img src={completedIMG} alt={`Eres finalista en ${ profile.completed } procesos de selección`} />
        </div>
        <span> Eres finalista en <strong>{ profile.completed }</strong> procesos de selección </span>
      </div>
    </div> );
}
