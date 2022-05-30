import React, { useEffect, useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { getHeroesRequest, createHeroRequest } from '../../store/actions/actionCreators';
import CreateHeroForm from '../../components/CreateHeroForm';

function HeroPage (props) {
    const heroes = useSelector(state => state.heroes);
    const dispatch = useDispatch();

    const actions = useMemo(
        () =>
            bindActionCreators(
                {
                    getHeroesRequest,
                    createHeroRequest
                },
                dispatch
            ),
        [dispatch]
    );

    useEffect(() => {
        actions.getHeroesRequest();
    }, [actions]);

    const onCreate = (data, formikBag) => {
        console.log(data);
        actions.createHeroRequest(data);

        formikBag.resetForm();
    };

    return (
        <div>
            <CreateHeroForm onSubmit={onCreate} />
            <ul>
                {heroes.list.map(h => (
                    <li key={h.id}>
                        <div>
                            {h.nickname} ({h.realName})
                        </div>
                        <div>
                            <img width='200' src={h.image} alt={h.nickname} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HeroPage;
