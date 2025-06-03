import axios from 'axios'

const API_URL = "https://capkqyvziqgppdhelntw.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhcGtxeXZ6aXFncHBkaGVsbnR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MzE0MzQsImV4cCI6MjA2NDUwNzQzNH0.qzxmBMuRBDx3fFyzrs3P4RWKvnsmncjNZydX25eZ9EI"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    }
}