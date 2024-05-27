import React from 'react';

class SMEListPage extends React.Component {
    render() {
        const { smes } = this.props;

        return (
            <div>
                <h1>Subject Matter Experts List</h1>
                <ul>
                    {smes.length > 0 ? (
                        smes.map(sme => (
                            <li key={sme.pk}>
                                <a href={`/sme/${sme.pk}`}>{sme.sme_name}</a>
                                <p>Profile Summary: {sme.sme_profile_summary}</p>
                                <p>Experience: {sme.sme_experience} years</p>
                            </li>
                        ))
                    ) : (
                        <p>No Subject Matter Experts found.</p>
                    )}
                </ul>
                <a href="/sme/create">Add a new SME</a>
            </div>
        );
    }
}

export default SMEListPage;
