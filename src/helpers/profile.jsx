import React from "react";

export const renderContacts = (profile) => {
    return Object.entries(profile.contacts).map(
        ([name, link]) => (
            <div key={profile.contacts.name}>
                {name[0].toUpperCase() + name.slice(1)}:
                {link ?? " not defined"}
            </div>
        )
    );
}