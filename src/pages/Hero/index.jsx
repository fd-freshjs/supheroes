import React from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { getHeroesRequest } from '../../store/actions/actionCreators';
import CreateHeroForm from '../../components/CreateHeroForm';

function HeroPage (props) {
    const heroes = useSelector(state => state.heroes);
    const dispatch = useDispatch();

    const actions = bindActionCreators(
        {
            getHeroesRequest,
            // createHeroRequest
        },
        dispatch
    );

    const onCreate = (data, formikBag) => {
        console.log(data);
        // actions.createHeroRequest()

        formikBag.resetForm();
    };

    return (
        <div>
            {/* <button
                onClick={() => {
                    actions.getHeroesRequest();
                }}
            >
                Get Heroes on mount
            </button> */}
            <CreateHeroForm onSubmit={onCreate}/>
            <ul>
                {heroes.list.map(h => (
                    <li key={h.id}>
                        <div>
                            {h.nickname} ({h.realName})
                        </div>
                        <div>
                            <img width="200" src={h.image} alt={h.nickname} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HeroPage;
