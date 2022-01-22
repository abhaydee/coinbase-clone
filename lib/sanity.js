import  SanityClient  from "@sanity/client";

export const client =SanityClient({
    projectId:"hfam2mls",
    dataset:"production",
    apiVersion:'2021-03-25',
    useCdn:false,
    token:"skWrmHdBYs0bFsmeG3J5QtoIyNXndwj3aGcvS7xrfFxjTPl80v8cKF63lcxV9NzbksYAx3b3SKcC6M5SPflCYSgR8IRG3pWtNK6T8kWoXMahcKyLdq54tLMy2iLVGvuv2jrQZrOiGGol5xLtZUEZsA5HsvdXK4exR5BUv1ktlWaPbDb5w98o"
})
