// Dependencies
import React from 'react';

// Assets
import aplicatedIMG from "../assets/img/007-check.svg";
import interestedIMG from "../assets/img/021-medical.svg";
import evaluatedIMG from "../assets/img/023-curriculum-1.svg";
import completedIMG from "../assets/img/015-car.svg";

export default function summaryMap(styles, user) {
  return (
    <div className={styles.info}>
      <div className={styles.Aplicated}>
        <div className={styles.image}>
          <img
            src={aplicatedIMG}
            alt={`Aplicaste a ${user.profil.aplicated} ofertas`}
          />
        </div>
        <span>
          Aplicaste a <strong>{user.profil.aplicated}</strong> ofertas
        </span>
      </div>
      <div className={styles.interested}>
        <div className={styles.image}>
          <img
            src={interestedIMG}
            alt={`Ha ${user.profil.interested} personas les interesa tu perfil`}
          />
        </div>
        <span>
          Ha <strong>{user.profil.interested}</strong> personas les interesa tu
          perfil
        </span>
      </div>
      <div className={styles.evaluated}>
        <div className={styles.image}>
          <img
            src={evaluatedIMG}
            alt={`${user.profil.evaluated} empresas evaluann tu HV`}
          />
        </div>
        <span>
          <strong>{user.profil.evaluated}</strong> empresas evaluan tu hoja de
          vida
        </span>
      </div>
      <div className={styles.completed}>
        <div className={styles.image}>
          <img
            src={completedIMG}
            alt={`Eres finalista en ${
              user.profil.completed
            } procesos de selección`}
          />
        </div>
        <span>
          Eres finalista en <strong>{user.profil.completed}</strong> procesos de
          selección
        </span>
      </div>
    </div>
  );
}
