<script context="module">
	import { getCookie, setCookie } from "typescript-cookie";
    import { goto } from "$app/navigation";

    const logout = async() => {
        const response = await fetch('http://localhost:8080/auth/logout', {
				method: 'GET',
				headers: {
                    Authorization: `Bearer ` + getCookie('accessToken'),
					'Content-Type': 'application/json'
				},
			});

        setCookie('accessToken', '', { path: '/;' });
        setCookie('refreshToken', '', { path: '/;' });
        setCookie('nickname', '', { path: '/;' });
        goto('/login');
    }
</script>

<h1>이벤트 시스템</h1>
<button on:click={logout}>로그아웃</button> <br>
<a href="/event/1">이벤트리스트</a>


