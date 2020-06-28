import {MenuItem} from "../App";

export type PostResponse = {
    message: string,
    body: any,
    ok: boolean
}

const postHeaders = {
    'Accept': 'application/json, text/plain, *!/!*',
    'Content-Type': 'application/json'
};

export const updateItem = (updatedItem: MenuItem): Promise<boolean> => {
    return fetch(process.env.REACT_APP_API_URL+'/menuItems/'+updatedItem.item_id, {
        method: 'PUT',
        headers: postHeaders,
        body: JSON.stringify(updatedItem)
    })
        .then(response => {
            if (!response.ok) throw new Error(response.statusText);
            return true
        })
        .catch (e => { return false })
}

export const deleteOptionFromItem = (item_id: number, option_id: number): Promise<boolean> => {
    return fetch(process.env.REACT_APP_API_URL+'/menuItems/options/'+item_id+'/'+option_id, {
        method: 'DELETE',
    })
        .then((response) => {
            if (!response.ok) throw new Error(response.statusText);
            return true
        })
        .catch((e) => {
            return false
        })
};

export const createOption = (title: string): Promise<PostResponse> => {
    return fetch(process.env.REACT_APP_API_URL+'/options', {
        method: 'POST',
        headers: postHeaders,
        body: JSON.stringify({title: title})
    })
        .then(response => {
            if (!response.ok) throw new Error(response.statusText);
            return response.json().then(data => data as PostResponse)
        })
        .catch (e => { return {message: e, body: {}, ok: false} })

};

export const createChoice = (choice_title: string, option_id: number): Promise<PostResponse> => {
    return fetch(process.env.REACT_APP_API_URL+'/choices', {
        method: 'POST',
        headers: postHeaders,
        body: JSON.stringify({choice_title: choice_title, option_id: option_id})
    })
        .then(response => {
            if (!response.ok) throw new Error(response.statusText);
            return response.json().then(data => data as PostResponse)
        })
        .catch (e => { return {message: e, body: {}, ok: false} })

};

export const addOptionToItem = (item_id: number, option_id: number): Promise<PostResponse> => {
    return fetch(process.env.REACT_APP_API_URL+'/options/item/addition', {
        method: 'POST',
        headers: postHeaders,
        body: JSON.stringify({
            item_id: item_id,
            option_id: option_id
        })
    })
        .then(response => {
            if (!response.ok) throw new Error(response.statusText);
            return response.json().then(data => data as PostResponse)
        })
        .catch (e => { return {message: e, body: {}, ok: false} })
};