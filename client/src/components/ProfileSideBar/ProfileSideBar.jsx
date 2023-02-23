import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../LogoutButton/LogoutButton";

import styles from "./profileSideBar.module.css";

const ProfileSideBar = ({ handleEdit, noLeidos }) => {
    return (
        <div className={styles.sideBar}>

            <div 
                className={styles.closedSide}
                onClick={handleEdit}    
            >
                <p>X</p>
            </div>


            {/* PERFIL */}
            <div className={styles.profileCnt}>
                <Link
                    to="/Profile"
                    onClick={handleEdit}
                    className={styles.btnLink}
                >

                    <Icon 
                        className={styles.profileBtn}
                        icon="carbon:user-profile" 
                    />


                <div className={styles.textCnt}> 
                    <p className={styles.textIcon}>Editar perfil</p>
                </div>
                </Link>
            </div>

            {/* CHATS */}
            <div className={styles.profileCnt}>

                <Link
                    to="/chats"
                    onClick={handleEdit}
                    className={styles.btnLink}
                >

                    <Icon 
                        className={styles.profileBtn}    
                        icon="ic:baseline-message" 
                    />
                
                    
                    {
                        noLeidos <= 0 ? null : noLeidos <= 9 ? 
                        (
                            <div>
                                <Icon
                                    icon={`mdi:number-${noLeidos}-circle`}
                                    width={"30px"}
                                    height={"30px"}
                                    style={{
                                        marginTop: "10px",
                                    }}
                                />
                            </div>
                        ) 
                        : 
                        (
                            <div>
                                <Icon
                                    icon="mdi:number-9-plus-circle"
                                    width={"30px"}
                                    height={"30px"}
                                    style={{
                                        marginTop: "10px",
                                    }}
                                />
                            </div>
                        )
                    }


                <div className={styles.textCnt}> 
                    <p className={styles.textIcon}>Ver mensajes</p>
                </div>
                </Link>

            </div>

            {/* FAVS */}
            <div className={styles.profileCnt}>
                <Link
                    to="/seguimiento"
                    onClick={handleEdit}
                    className={styles.btnLink}
                >

                    <Icon 
                        className={styles.profileBtn}
                        icon="ph:heart"
                    />


                <div className={styles.textCnt}> 
                    <p className={styles.textIcon}>Mis seguimientos</p>
                </div>
                </Link>
            </div>

            <div 
                className={styles.logoutContainer} 
                onClick={handleEdit}
            >
                <LogoutButton />
            </div>
        </div>
    );
};

export default ProfileSideBar;
