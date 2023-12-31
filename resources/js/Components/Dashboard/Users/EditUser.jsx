import { useForm } from '@inertiajs/inertia-react'
import React, { useEffect } from 'react'

export default function EditUser({close, model}) {

    const {data, setData, put, reset, errors} = useForm({ name: model.name, email: model.email, username: model.username, address: model.address, password: model.password, });

    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        put(route('users.update', model.id), {
            data, 
            onSuccess: () => {
                reset(),
                close()
            }, 
        });
    }

    useEffect(() => {
        setData({...data,
            name: model.name, email: model.email, username: model.username, address: model.address, password: model.password
        });
    }, [model]);

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="name" className="col-form-label">Nombre:</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={onChange} id="name"/>
                            {errors && <div className='text-danger mt-1'>{errors.name}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="username" className="col-form-label">Nombre de usuario:</label>
                            <input type="text" className="form-control" name='username' value={data.username} onChange={onChange} id="username"/>
                            {errors && <div className='text-danger mt-1'>{errors.username}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="col-form-label">Correo electrónico:</label>
                            <input type="email" className="form-control" name='email' value={data.email} onChange={onChange} id="email"/>
                            {errors && <div className='text-danger mt-1'>{errors.email}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="address" className="col-form-label">Dirección:</label>
                            <input type="text" className="form-control" name='address' value={`${data.address || ''}`} onChange={onChange} id="address"/>
                            {errors && <div className='text-danger mt-1'>{errors.address}</div>}
                        </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn bg-gradient-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="submit" className="btn bg-gradient-primary">Actualizar</button>
                </div>
            </form>
        </>

    )
}
