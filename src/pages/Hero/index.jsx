import React from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { getHeroesRequest } from '../../store/actions/actionCreators';

function HeroPage (props) {
    const heroes = useSelector(state => state.heroes);
    const dispatch = useDispatch();

    const actions = bindActionCreators(
        {
            getHeroesRequest,
        },
        dispatch
    );

    return (
        <div>
            <button
                onClick={() => {
                    actions.getHeroesRequest();
                }}
            >
                Get Heroes
            </button>
            <ul>
                {heroes.list.map(h => (
                    <li key={h.id}>
                        <div>
                        {h.nickname} ({h.realName})
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HeroPage;
