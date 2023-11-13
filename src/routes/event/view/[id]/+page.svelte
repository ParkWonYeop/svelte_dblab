<script lang="ts">
    import { getCookie } from 'typescript-cookie';
	import type { PageData } from './$types';
    import { goto } from '$app/navigation';
	export let data: PageData;

	const partipate = async() => {
		const response = await fetch('http://localhost:8080/participate', {
				method: 'POST',
				headers: {
					Authorization: `Bearer ` + getCookie('accessToken'),
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json'
				},
				credentials: 'include',
				body: JSON.stringify({ eventId:data.data.id })
			});
	}

	const deletePartipate = async() => {
		const response = await fetch('http://localhost:8080/participate', {
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ` + getCookie('accessToken'),
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json'
				},
				credentials: 'include',
				body: JSON.stringify({ eventId:data.data.id })
			});
	}

	const deleteEvent = async() => {
		const response = await fetch('http://localhost:8080/organize', {
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ` + getCookie('accessToken'),
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json'
				},
				credentials: 'include',
				body: JSON.stringify({ eventId:data.data.id })
			});
			goto('/event/1')
	}
</script>

<h1>제목 : {data.data.name}</h1>
<body>내용 : {data.data.description}</body>
<h>{data.data.maxParticipation} / {data.data.currentParticipation}</h><br><br>
<form on:submit|preventDefault={partipate} style="display: inline;">
	<button type="submit">참여</button>
</form>

<form on:submit|preventDefault={deletePartipate} style="display: inline;">
	<button type="submit">참여해제</button>
</form>

<br><br>
<form on:submit|preventDefault={deleteEvent} style="display: inline;">
	<button type="submit">삭제</button>
</form>
<form action="/event/review/{data.data.id}">
<button>리뷰</button>
</form>

