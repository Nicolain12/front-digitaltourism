import React from 'react';
import './deleteConfirm.css';

function DeleteConfirm() {
    return (
        <div className="App-deleteConfirm">
            <main className="main-deleteConfirm">
                <div className="choose-main-div">
                    <form className="delete-confirm" action="/users/distroy/1?_method=DELETE" method="POST">
                        <h3>Estas seguro que quieres eliminar el usuario?</h3>
                        <div>
                            <a href="/users/profile">Cancelar</a>
                            <button type="submit">ELIMINAR</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default DeleteConfirm;
