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

const GameList: React.FC = () => {

    const [selectedGameCategory, setSelectedGameCategory] = useState<gameCategory>(gameCategory.All);

    const gameCategories: gameCategory[] = [gameCategory.All, gameCategory.Puzzle]; // Add your categories

    const games: App[] = [
        {
            id: 1, name: 'Simple Sudoku', category: gameCategory.Puzzle, iconSrc: 'icon_simple_sudoku.png',
            googlePlayStoreLink: "https://play.google.com/store/apps/details?id=com.hojarojasoftware.simplesudoku&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
        },
    ]

    const handleGameCategoryChange = (category: gameCategory) => {
        setSelectedGameCategory(category);
    };

    const filteredGames = selectedGameCategory === "All"
        ? games
        : games.filter(app => app.category === selectedGameCategory);

    return (
        <section>
            <h2>Games so far</h2>
            <div className="category-filter">
                <div>Categories:</div>
                {gameCategories.map(category => (
                    <button
                        key={category}
                        onClick={() => handleGameCategoryChange(category)}
                        className={(selectedGameCategory === category || selectedGameCategory === null) ? 'active' : ''}
                    >
                        {category.toString()}
                    </button>
                ))}
            </div>
            <div className='globalAppsContainer'>
                {filteredGames.map(app => (
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

export default GameList;