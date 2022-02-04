<?php

namespace App\Http\Controllers;

class TestController extends Controller
{

	/**
	 * This is a description
	 *
	 * @param string $something
	 * @return string|null
	 */
	public function helloWorld(string $something)
	{
		return $something;
	}

}
