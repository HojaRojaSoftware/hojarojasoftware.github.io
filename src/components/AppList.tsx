import React, { useState } from 'react';
import './../styles/AppList.css';
import appCategory from '../enums/appCategoryEnum'
import gameCategory from '../enums/gameCategoryEnum'

interface App {
    id: number;
    name: string;
    googlePlayStoreLink: string;
    category: appCategory | gameCategory;
    iconSrc: string
}

const AppList: React.FC = () => {

    const [selectedAppCategory, setSelectedAppCategory] = useState<appCategory>(appCategory.All);

    const appCategories: appCategory[] = [appCategory.All, appCategory.Spanish, appCategory.French, appCategory.Armenian, appCategory.Esoteric]; // Add your categories

    const handleAppCategoryChange = (category: appCategory) => {
        setSelectedAppCategory(category);
    };

    const apps: App[] = [
        {
            id: 1, name: 'Look Up Spanish', category: appCategory.Spanish, iconSrc: 'icon_look_up_spanish.png',
            googlePlayStoreLink: "https://play.google.com/store/apps/details?id=com.hojarojasoftware.lookupspanish&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
        },
        {
            id: 2, name: 'Spanish Numbers and Words', category: appCategory.Spanish, iconSrc: 'icon_spanish_numbers_to_words.png',
            googlePlayStoreLink: "https://play.google.com/store/apps/details?id=com.hojarojasoftware.spanishnumberstowords&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
        },
        {
            id: 3, name: 'Tarot Birth Cards', category: appCategory.Esoteric, iconSrc: 'icon_tarot_birth_cards.png',
            googlePlayStoreLink: "https://play.google.com/store/apps/details?id=com.hojarojasoftware.tarotbirthcards&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
        },
        {
            id: 4, name: 'Armenian Translit', category: appCategory.Armenian, iconSrc: 'icon_armenian_translit.png',
            googlePlayStoreLink: "https://play.google.com/store/apps/details?id=com.hojarojasoftware.armeniantranslit&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
        },
        {
            id: 5, name: 'Look Up French', category: appCategory.French, iconSrc: 'icon_look_up_french.png',
            googlePlayStoreLink: "https://play.google.com/store/apps/details?id=com.hojarojasoftware.lookupfrench&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
        },


        // Add more apps as needed
    ];

    const filteredApps = selectedAppCategory === "All"
        ? apps
        : apps.filter(app => app.category === selectedAppCategory);

    return (
        <section>
            <h2>Apps so far</h2>
            <div className="category-filter">
                <div>Categories:</div>
                {appCategories.map(category => (
                    <button
                        key={category}
                        onClick={() => handleAppCategoryChange(category)}
                        className={(selectedAppCategory === category || selectedAppCategory === null) ? 'active' : ''}
                    >
                        {category.toString()}
                    </button>
                ))}
            </div>
            <div className='globalAppsContainer'>
                {filteredApps.map(app => (
                    <div className="appContainer" key={app.id}>
                        <div className="appTitle">{app.name}</div>
                        <div className='appCategoryText'>{app.category.toString()}</div>
                        <img className='appIconImage' src={require(`./../assets/appIcons/${app.iconSrc}`)} />
                        <a href={app.googlePlayStoreLink} target="_blank"><img className='googlePlayStoreBadge' alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' /></a>
                    </div>
                ))}
            </div>
        </section>


    );
};

export default AppList;