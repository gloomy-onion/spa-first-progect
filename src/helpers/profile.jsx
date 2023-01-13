import React from "react";

export const renderContacts = (profile) => {
    return Object.entries(profile.contacts).map(
        ([name, link]) => (
            <div>
                {name[0].toUpperCase() + name.slice(1)}:
                {link ?? "not defined"}
            </div>
        )
    );
}